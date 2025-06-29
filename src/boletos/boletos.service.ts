import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoletoDto } from './dto/create-boleto.dto';
import { UpdateBoletoDto } from './dto/update-boleto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Boleto } from './entities/boleto.entity';
import { Repository } from 'typeorm';
import * as QRCode from 'qrcode';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { EstadoReserva } from '../common/enums/reserva.enum';
import { EstadoBoleto } from 'src/common/enums/boletos.enum';
import { Reserva } from 'src/reserva/entities/reserva.entity';

@Injectable()
export class BoletosService {

  constructor(
    @InjectRepository(Boleto)
    private readonly boletoRepository: Repository<Boleto>,
    private readonly cloudinaryService: CloudinaryService,
    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>
  ){}

  async create(createBoletoDto: CreateBoletoDto) {
    // Guardar el boleto primero para obtener el ID (si es necesario)
    const boleto = this.boletoRepository.create(createBoletoDto);
    const boletoGuardado = await this.boletoRepository.save(boleto);

    // Buscar las reservas asociadas a este boleto
    const reservas = await this.reservaRepository.find({
      where: { boleto_id: boletoGuardado.boleto_id },
      relations: ['asiento']
    });

    // Obtener los IDs de los asientos
    const asientoIds = reservas.map(reserva => reserva.asiento?.asiento_id).filter(Boolean);

    // Generar datos para el QR, incluyendo el array de IDs de asientos
    const qrData = {
      total: boletoGuardado.total,
      cantidad_asientos: boletoGuardado.cantidad_asientos,
      estado: boletoGuardado.estado,
      asientos: boletoGuardado.asientos,
      asiento_ids: asientoIds
    };

    // Generar QR como Buffer
    const qrBuffer = await QRCode.toBuffer(JSON.stringify(qrData));

    // Subir el QR a Cloudinary
    const uploadResult = await this.cloudinaryService.uploadBuffer(qrBuffer, 'boletos');

    // Actualizar la URL del QR en el boleto
    boletoGuardado.url_imagen_qr = uploadResult.secure_url;
    await this.boletoRepository.save(boletoGuardado);

    return boletoGuardado;
  }

  async findAll() {
    const boletos = await this.boletoRepository.find();
    if(!boletos.length){
      throw new NotFoundException('No se encontraron boletos');
    }
    return boletos;
  }

  async findAllByUserId(userId: string) {
    // Buscar todas las reservas confirmadas del usuario
    const reservas = await this.reservaRepository.find({
      where: { usuario_id: userId, estado: EstadoReserva.CONFIRMADA }
    });

    if (!reservas.length) {
      throw new NotFoundException(`No se encontraron reservas confirmadas para el usuario con ID ${userId}`);
    }

    // Buscar y guardar todos los boletos asociados a las reservas
    const boletos: Boleto[] = [];
    for (const reserva of reservas) {
      if (reserva.boleto_id) {
        const boleto = await this.boletoRepository.findOne({
          where: { boleto_id: reserva.boleto_id },
          relations: ['reservas', 'reservas.asiento']
        });
        if (boleto) {
          boletos.push(boleto);
        }
      }
    }

    if (!boletos.length) {
      throw new NotFoundException(`No se encontraron boletos para las reservas del usuario con ID ${userId}`);
    }

    return boletos;
  }

  async findOne(uid: string) {
    const boleto = await this.boletoRepository.findOne({
      where: { boleto_id: uid },
      relations: ['reservas', 'reservas.asiento']
    });
    if(!boleto){
      throw new NotFoundException('No se encontro el boleto');
    }
    return boleto;
  }

  async findByReservaId(reservaId: string) {
    const boleto = await this.boletoRepository
      .createQueryBuilder('boleto')
      .innerJoinAndSelect('boleto.reservas', 'reserva')
      .where('reserva.reserva_id = :reservaId', { reservaId })
      .getOne();

    if (!boleto) {
      throw new NotFoundException(`No se encontró boleto para la reserva con ID ${reservaId}`);
    }

    return boleto;
  }

  update(uid: string, updateBoletoDto: UpdateBoletoDto) {
    return `This action updates a #${uid} boleto`;
  }

  async remove(uid: string) {
    const boleto = await this.boletoRepository.findOne({
      where: { boleto_id: uid },
      relations: ['reservas', 'reservas.asiento']
    });

    if (!boleto) {
      throw new NotFoundException(`Boleto con UID ${uid} no encontrado`);
    }

    // Si hay dos reservas, solo eliminar los datos de la reserva cancelada
    if (boleto.reservas && boleto.reservas.length > 1) {
      const reservaCancelada = boleto.reservas.find(r => r.estado === EstadoReserva.CANCELADA);
      if (reservaCancelada) {
        // Actualizar el total y cantidad de asientos
        boleto.total -= reservaCancelada.precio;
        boleto.cantidad_asientos--;
        
        // Actualizar la lista de asientos
        const asientosArray = boleto.asientos.split(',');
        const asientoIndex = asientosArray.indexOf(reservaCancelada.asiento.numero_asiento.toString());
        if (asientoIndex > -1) {
          asientosArray.splice(asientoIndex, 1);
        }
        boleto.asientos = asientosArray.join(',');

        // Generar nuevo QR con datos actualizados
        const qrData = {
          total: boleto.total,
          cantidad_asientos: boleto.cantidad_asientos,
          estado: boleto.estado,
          asientos: boleto.asientos
        };

        const qrBuffer = await QRCode.toBuffer(JSON.stringify(qrData));
        const uploadResult = await this.cloudinaryService.uploadBuffer(qrBuffer, 'boletos');
        boleto.url_imagen_qr = uploadResult.secure_url;

        return this.boletoRepository.save(boleto);
      }
    }

    boleto.estado = EstadoBoleto.CANCELADO;

    return this.boletoRepository.save(boleto);
  }
}
