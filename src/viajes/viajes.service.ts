import { Injectable, BadRequestException, ConflictException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateViajeDto } from './dto/create-viaje.dto';
import { UpdateViajeDto } from './dto/update-viaje.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Viaje } from './entities/viaje.entity';
import { Repository } from 'typeorm';
import { Frecuencia } from 'src/frecuencias/entities/frecuencia.entity';

@Injectable()
export class ViajesService {
  constructor(
    @InjectRepository(Viaje)
    private readonly viajeRepository: Repository<Viaje>,
    @InjectRepository(Frecuencia)
    private readonly frecuenciaRepository: Repository<Frecuencia>,
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
}
