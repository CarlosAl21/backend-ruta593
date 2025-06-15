import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstadoAsiento } from './entidades/estado_asiento.entity';
import { CrearEstadoAsientoDto } from './dto/crear-estado_asiento.dto';
import { ActualizarEstadoAsientoDto } from './dto/actualizar-estado_asiento.dto';

@Injectable()
export class EstadoAsientosService {
  constructor(
    @InjectRepository(EstadoAsiento)
    private readonly repo: Repository<EstadoAsiento>,
  ) {}

  crear(dto: CrearEstadoAsientoDto) {
    const estado = this.repo.create(dto);
    return this.repo.save(estado);
  }

  buscarTodos() {
    return this.repo.find();
  }

  buscarUno(id: string) {
    return this.repo.findOneBy({ id });
  }

  actualizar(id: number, dto: ActualizarEstadoAsientoDto) {
    return this.repo.update(id, dto);
  }

  eliminar(id: number) {
    return this.repo.delete(id);
  }
}
