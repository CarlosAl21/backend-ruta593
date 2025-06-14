import { Injectable, BadRequestException, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateViajeDto } from './dto/create-viaje.dto';
import { UpdateViajeDto } from './dto/update-viaje.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Viaje } from './entities/viaje.entity';
import { Repository } from 'typeorm';
import { Frecuencia } from 'src/frecuencias/entities/frecuencia.entity';
import { Reserva } from 'src/reserva/entities/reserva.entity';
import { EstadoReserva } from 'src/common/enums/reserva.enum';

@Injectable()
export class ViajesService {
  constructor(
    @InjectRepository(Viaje)
    private readonly viajeRepository: Repository<Viaje>,
    @InjectRepository(Frecuencia)
    private readonly frecuenciaRepository: Repository<Frecuencia>,
    @InjectRepository(Reserva)
    private readonly reservaRepository: Repository<Reserva>,
  ) {}

  async create(createViajeDto: CreateViajeDto) {
    try {
      const frecuencia = await this.frecuenciaRepository.findOne({
        where: { frecuencia_id: createViajeDto.id_frecuencia.frecuencia_id },
      });
      if (!frecuencia) {
        throw new NotFoundException('Frecuencia no encontrada');
      }
      if (!frecuencia.activo) {
        throw new ConflictException('Frecuencia no está activa');
      }
      const newviaje = this.viajeRepository.create(createViajeDto);
      return await this.viajeRepository.save(newviaje);
    } catch (error) {
      console.error('Error creating viaje:', error);
      throw new InternalServerErrorException('Error creando viaje');
    }
  }

  findAll() {
    return this.viajeRepository.find({
      relations: ['id_frecuencia'],
    });
  }

  async findOne(id: string) {
    try {
      const viaje = await this.viajeRepository.findOne({
        where: { id_viaje: id },
        relations: ['id_frecuencia'],
      });
      if (!viaje) {
        throw new NotFoundException('Viaje no encontrado');
      }
      return viaje;
    } catch (error) {
      console.error('Error finding viaje:', error);
      throw new InternalServerErrorException('Error buscando viaje');
    }
  }

  async update(id: string, updateViajeDto: UpdateViajeDto) {
    try {
      const viaje = await this.viajeRepository.findOne({
        where: { id_viaje: id },
      });
      if (!viaje) {
        throw new NotFoundException('Viaje no encontrado');
      }
      const updatedViaje = this.viajeRepository.merge(viaje, updateViajeDto);
      return await this.viajeRepository.save(updatedViaje);
    } catch (error) {
      console.error('Error updating viaje:', error);
      throw new InternalServerErrorException('Error actualizando viaje');
    }
  }

  async remove(id: string) {
    try {
      const viaje = await this.viajeRepository.findOne({
        where: { id_viaje: id },
      });
      if (!viaje) {
        throw new NotFoundException('Viaje no encontrado');
      }
      return await this.viajeRepository.remove(viaje);
    } catch (error) {
      console.error('Error removing viaje:', error);
      throw new InternalServerErrorException('Error eliminando viaje');
    }
  }

  async findByFecha(fecha: Date) {
    try {
      const viajes = await this.viajeRepository.find({
        where: { fecha_salida: fecha },
        relations: ['id_frecuencia'],
      });
      if (viajes.length === 0) {
        throw new NotFoundException('No se encontraron viajes para la fecha especificada');
      }
      return viajes;
    } catch (error) {
      console.error('Error finding viajes by date:', error);
      throw new InternalServerErrorException('Error buscando viajes por fecha');
    }
  }

  async actualizarAsientosOcupados(viajeId: string) {
    // Busca el viaje
    const viaje = await this.viajeRepository.findOne({ where: { id_viaje: viajeId }, relations: ['frecuencia'] });
    if (!viaje) throw new NotFoundException('Viaje no encontrado');

    // Cuenta reservas confirmadas para la frecuencia y fecha del viaje
    const asientosOcupados = await this.reservaRepository.count({
      where: {
        frecuencia_id: viaje.id_frecuencia.frecuencia_id,
        fecha_viaje: viaje.fecha_salida,
        estado: EstadoReserva.CONFIRMADA
      }
    });

    viaje.num_asientos_ocupados = asientosOcupados;
    await this.viajeRepository.save(viaje);
  }

  async finalizarViaje(viajeId: string) {
    // Buscar el viaje
    const viaje = await this.viajeRepository.findOne({
      where: { id_viaje: viajeId },
      relations: ['id_frecuencia'],
    });
    if (!viaje) throw new NotFoundException('Viaje no encontrado');

    // Cambiar estado del viaje a TERMINADO (debes tener un campo estado en Viaje)
    viaje.estado = 'TERMINADO'; // Asegúrate que este campo exista en la entidad Viaje

    // Limpiar asientos ocupados
    viaje.num_asientos_ocupados = 0;
    await this.viajeRepository.save(viaje);

    // Cambiar estado de reservas confirmadas a FINALIZADA
    const reservas = await this.reservaRepository.find({
      where: {
        frecuencia_id: viaje.id_frecuencia.frecuencia_id,
        fecha_viaje: viaje.fecha_salida,
        estado: EstadoReserva.CONFIRMADA,
      },
      relations: ['asiento'],
    });

    for (const reserva of reservas) {
      reserva.estado = EstadoReserva.FINALIZADA; // O CANCELADA si prefieres
      await this.reservaRepository.save(reserva);

      // Si tienes un flag en Asiento para reservado, límpialo aquí
      // reserva.asiento.reservado = false;
      // await this.asientoRepository.save(reserva.asiento);
    }
  }
}
