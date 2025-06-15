import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudad } from './entidades/ciudad.entity';
import { CrearCiudadDto } from './dto/crear-ciudad.dto';
import { ActualizarCiudadDto } from './dto/actualizar-ciudad.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CiudadesService {
  constructor(
    @InjectRepository(Ciudad)
    private readonly repo: Repository<Ciudad>,
  ) {}

  crear(dto: CrearCiudadDto) {
    const ciudad = this.repo.create({ ...dto, id: uuidv4() });
    return this.repo.save(ciudad);
  }

  buscarTodos() {
    return this.repo.find();
  }

  buscarUno(id: string) {
    return this.repo.findOneBy({ id });
  }

  actualizar(id: string, dto: ActualizarCiudadDto) {
    return this.repo.update(id, dto);
  }

  eliminar(id: string) {
    return this.repo.delete(id);
  }
}
