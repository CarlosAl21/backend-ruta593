import { Injectable } from '@nestjs/common';
import { CreateDescuentoDto } from './dto/create-descuento.dto';
import { UpdateDescuentoDto } from './dto/update-descuento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Descuento } from './entities/descuento.entity';

@Injectable()
export class DescuentosService {

  constructor(
    @InjectRepository(Descuento)
    private readonly descuentoRepository: Repository<Descuento>,
  ) {}

  async create(createDescuentoDto: CreateDescuentoDto) {
    try {
      const newDescuento = this.descuentoRepository.create(createDescuentoDto);
      return await this.descuentoRepository.save(newDescuento);
    } catch (error) {
      console.error('Error creating descuento:', error);
      throw new Error('Error creating descuento');
    }
  }

  findAll() {
    return  this.descuentoRepository.find();
  }

  findOne(id: string) {
    return this.descuentoRepository.findOne({
      where: { descuento_id: id },
    });
  }

  async update(id: string, updateDescuentoDto: UpdateDescuentoDto) {
    try {
      const descuento = await this.descuentoRepository.findOne({
        where: { descuento_id: id },
      });
      if (!descuento) {
        throw new Error('Descuento not found');
      }
      Object.assign(descuento, updateDescuentoDto);
      return await this.descuentoRepository.save(descuento);
    } catch (error) {
      console.error('Error updating descuento:', error);
      throw new Error('Error updating descuento');
    }
  }

  async remove(id: string) {
    try {
      const descuento = await this.descuentoRepository.findOne({
        where: { descuento_id: id },
      });
      if (!descuento) {
        throw new Error('Descuento not found');
      }
      return await this.descuentoRepository.remove(descuento);
    } catch (error) {
      console.error('Error removing descuento:', error);
      throw new Error('Error removing descuento');
    }
  }

  async findByCodigo(codigo: string) {
    try {
      const descuento = await this.descuentoRepository.findOne({
        where: { codigo_promocional: codigo, activo: true },
      });
      if (!descuento) {
        throw new Error('Descuento not found');
      }
      return descuento;
    } catch (error) {
      console.error('Error finding descuento by code:', error);
      throw new Error('Error finding descuento by code');
    }
  }
}
