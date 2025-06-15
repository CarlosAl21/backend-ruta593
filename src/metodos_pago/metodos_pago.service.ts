import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MetodoPago } from './entidades/metodo_pago.entity';
import { CrearMetodoPagoDto } from './dto/crear-metodo_pago.dto';
import { ActualizarMetodoPagoDto } from './dto/actualizar-metodo_pago.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MetodosPagoService {
  constructor(
    @InjectRepository(MetodoPago)
    private readonly repo: Repository<MetodoPago>,
  ) {}

  crear(dto: CrearMetodoPagoDto) {
    const metodo = this.repo.create({ ...dto, id: uuidv4() });
    return this.repo.save(metodo);
  }

  buscarTodos() {
    return this.repo.find();
  }

  buscarUno(id: string) {
    return this.repo.findOneBy({ id });
  }

  actualizar(id: string, dto: ActualizarMetodoPagoDto) {
    return this.repo.update(id, dto);
  }

  eliminar(id: string) {
    return this.repo.delete(id);
  }
}
