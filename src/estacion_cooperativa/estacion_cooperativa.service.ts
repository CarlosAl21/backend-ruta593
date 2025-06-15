import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstacionCooperativa } from './entidades/estacion_cooperativa.entity';
import { CrearEstacionCooperativaDto } from './dto/crear-estacion_cooperativa.dto';
import { ActualizarEstacionCooperativaDto } from './dto/actualizar-estacion_cooperativa.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class EstacionCooperativaService {
  constructor(
    @InjectRepository(EstacionCooperativa)
    private readonly repo: Repository<EstacionCooperativa>,
  ) {}

  crear(dto: CrearEstacionCooperativaDto) {
    const estacion = this.repo.create({ ...dto, id: uuidv4() });
    return this.repo.save(estacion);
  }

  buscarTodos() {
    return this.repo.find();
  }

  buscarUno(id: string) {
    return this.repo.findOneBy({ id });
  }

  actualizar(id: string, dto: ActualizarEstacionCooperativaDto) {
    return this.repo.update(id, dto);
  }

  eliminar(id: string) {
    return this.repo.delete(id);
  }
}
