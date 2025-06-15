import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstructuraBus } from './entidades/estructura_bus.entity';
import { CrearEstructuraBusDto } from './dto/crear-estructura_bus.dto';
import { ActualizarEstructuraBusDto } from './dto/actualizar-estructura_bus.dto';

@Injectable()
export class EstructuraBusesService {
  constructor(
    @InjectRepository(EstructuraBus)
    private readonly repo: Repository<EstructuraBus>,
  ) {}

  crear(dto: CrearEstructuraBusDto) {
    const estructura = this.repo.create(dto);
    return this.repo.save(estructura);
  }

  buscarTodos() {
    return this.repo.find();
  }

  buscarUno(id: number) {
    return this.repo.findOneBy({ id });
  }

  actualizar(id: number, dto: ActualizarEstructuraBusDto) {
    return this.repo.update(id, dto);
  }

  eliminar(id: number) {
    return this.repo.delete(id);
  }
}
