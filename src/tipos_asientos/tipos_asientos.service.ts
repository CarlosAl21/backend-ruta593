import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoAsiento } from './entidades/tipo_asiento.entity';
import { CrearTipoAsientoDto } from './dto/crear-tipo_asiento.dto';
import { ActualizarTipoAsientoDto } from './dto/actualizar-tipo_asiento.dto';

@Injectable()
export class TiposAsientosService {
  constructor(
    @InjectRepository(TipoAsiento)
    private readonly repo: Repository<TipoAsiento>,
  ) {}

  crear(dto: CrearTipoAsientoDto) {
    const tipo = this.repo.create(dto);
    return this.repo.save(tipo);
  }

  buscarTodos() {
    return this.repo.find();
  }

  buscarUno(id: number) {
    return this.repo.findOneBy({ id });
  }

  actualizar(id: number, dto: ActualizarTipoAsientoDto) {
    return this.repo.update(id, dto);
  }

  eliminar(id: number) {
    return this.repo.delete(id);
  }
}
