import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { Factura } from './entities/factura.entity';
import { PdfGeneratorService } from '../utils/pdf-generator.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { Reserva } from '../reserva/entities/reserva.entity';
import { Boleto } from '../boletos/entities/boleto.entity';
import { Cooperativa } from '../cooperativa/entities/cooperativa.entity';
import { User } from '../user/entities/user.entity';

@Injectable()
export class FacturaService {
  constructor(
    @InjectRepository(Factura)
    private readonly facturaRepository: Repository<Factura>,
    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>,
    @InjectRepository(Boleto)
    private readonly boletoRepository: Repository<Boleto>,
    @InjectRepository(Cooperativa)
    private readonly cooperativaRepository: Repository<Cooperativa>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly pdfGeneratorService: PdfGeneratorService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async create(createFacturaDto: CreateFacturaDto): Promise<Factura> {
    // Obtener todas las entidades necesarias con sus relaciones
    const [boleto, cooperativa, reserva, usuario] = await Promise.all([
      this.boletoRepository.findOne({
        where: { boleto_id: createFacturaDto.boleto_id },
        relations: ['reservas', 'reservas.frecuencia', 'reservas.frecuencia.bus']
      }),
      this.cooperativaRepository.findOne({
        where: { cooperativa_id: createFacturaDto.cooperativaId }
      }),
      this.reservaRepository.findOne({
        where: { reserva_id: createFacturaDto.reservaId },
        relations: ['frecuencia', 'frecuencia.bus', 'asiento']
      }),
      this.userRepository.findOne({
        where: { usuario_id: createFacturaDto.usuarioId }
      })
    ]);

    // Validar que existan todas las entidades
    if (!boleto || !cooperativa || !reserva || !usuario) {
      throw new NotFoundException('No se encontraron todas las entidades necesarias');
    }

    // Buscar y eliminar facturas anteriores para este boleto
    const facturasAnteriores = await this.facturaRepository.find({
      where: { boleto_id: boleto.boleto_id }
    });

    if (facturasAnteriores.length > 0) {
      await this.facturaRepository.remove(facturasAnteriores);
    }

    // Generar número de factura único
    const numero_factura = await this.generateFacturaNumber();

    // Crear la nueva factura
    const factura = this.facturaRepository.create({
      numero_factura: numero_factura, // propiedad exacta según la entidad
      subtotal: boleto.total,
      iva: 0,
      total: boleto.total,
      reserva,
      reservaId: reserva.reserva_id,
      usuario,
      usuarioId: usuario.usuario_id,
      cooperativa,
      cooperativaId: cooperativa.cooperativa_id,
      boleto,
      boleto_id: boleto.boleto_id
    });

    // Guardar la factura
    const facturaGuardada = await this.facturaRepository.save(factura);

    // Obtener la factura guardada con todas las relaciones necesarias
    const facturaCompleta = await this.facturaRepository.findOne({
      where: { factura_id: facturaGuardada.factura_id },
      relations: ['reserva', 'usuario', 'cooperativa', 'boleto', 'reserva.frecuencia', 'reserva.frecuencia.bus']
    });

    // Generar PDF con los datos actualizados del boleto
    const pdfBuffer = await this.generatePdf(facturaCompleta);
    const uploadResult = await this.cloudinaryService.uploadBuffer(pdfBuffer, 'facturas');

    // Actualizar la URL del PDF
    await this.facturaRepository.update(facturaGuardada.factura_id, {
      pdfUrl: uploadResult.secure_url,
    });

    return this.facturaRepository.findOne({
      where: { factura_id: facturaGuardada.factura_id },
      relations: ['reserva', 'usuario', 'cooperativa', 'boleto']
    });
  }

  async findAll(): Promise<Factura[]> {
    return this.facturaRepository.find({
      relations: ['reserva', 'usuario', 'cooperativa', 'boleto']
    });
  }

  async findByUser(usuario_id: string): Promise<Factura[]> {
    return this.facturaRepository.find({
      where: { usuarioId: usuario_id },
      relations: ['reserva', 'usuario', 'cooperativa', 'boleto']
    });
  }

  async findOne(id: string): Promise<Factura> {
    const factura = await this.facturaRepository.findOne({
      where: { factura_id: id },
      relations: [
        'reserva',
        'usuario',
        'cooperativa',
        'boleto',
        'reserva.frecuencia',
        'reserva.frecuencia.bus'
      ]
    });

    if (!factura) {
      throw new NotFoundException(`Factura con ID ${id} no encontrada`);
    }

    return factura;
  }

  async findByReservaId(reserva_id: string): Promise<Factura | null> {
    return this.facturaRepository.findOne({
      where: { reservaId: reserva_id },
      relations: ['reserva', 'usuario', 'cooperativa', 'boleto']
    });
  }

  private async generateFacturaNumber(): Promise<string> {
    const count = await this.facturaRepository.count();
    return `F-${(count + 1).toString().padStart(8, '0')}`;
  }

  private async generatePdf(factura: Factura): Promise<Buffer> {
    if (!factura.cooperativa || !factura.reserva || !factura.boleto) {
      throw new NotFoundException('Faltan datos necesarios para generar el PDF');
    }

    return this.pdfGeneratorService.generateTicket({
      cooperativa: factura.cooperativa.nombre,
      direccion: factura.cooperativa.direccion,
      ruc: factura.cooperativa.ruc,
      fechaViaje: factura.reserva.fecha_viaje.toISOString().split('T')[0],
      horaViaje: factura.reserva.frecuencia.hora_salida,
      asientos: factura.boleto.asientos,
      numeroAutobus: factura.reserva.frecuencia.bus.numero_bus.toString(),
      tipoPago: factura.reserva.metodo_pago,
      identificacionUsuario: factura.usuario.identificacion,
      nombreUsuario: factura.reserva.nombre_pasajero,
      destino: factura.reserva.destino_reserva,
      cantidad: factura.boleto.cantidad_asientos,
      precioUnitario: factura.subtotal / factura.boleto.cantidad_asientos,
    });
  }
}
