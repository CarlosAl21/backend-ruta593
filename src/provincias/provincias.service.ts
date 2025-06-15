import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Provincia } from './entidades/provincia.entity';
import { CrearProvinciaDto } from './dto/crear-provincia.dto';
import { ActualizarProvinciaDto } from './dto/actualizar-provincia.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProvinciasService {
  constructor(
    @InjectRepository(Provincia)
    private readonly repo: Repository<Provincia>,
  ) {}

  crear(dto: CrearProvinciaDto) {
    const provincia = this.repo.create({ ...dto, id: uuidv4() });
    return this.repo.save(provincia);
  }

  buscarTodos() {
    return this.repo.find();
  }

  buscarUno(id: string) {
    return this.repo.findOneBy({ id });
  }

  actualizar(id: string, dto: ActualizarProvinciaDto) {
    return this.repo.update(id, dto);
  }

  eliminar(id: string) {
    return this.repo.delete(id);
  }
}
