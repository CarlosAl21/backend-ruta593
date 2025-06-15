import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParadaIntermedia } from './entidades/parada_intermedia.entity';
import { CrearParadaIntermediaDto } from './dto/crear-parada_intermedia.dto';
import { ActualizarParadaIntermediaDto } from './dto/actualizar-parada_intermedia.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ParadasIntermediasService {
  constructor(
    @InjectRepository(ParadaIntermedia)
    private readonly repo: Repository<ParadaIntermedia>,
  ) {}

  crear(dto: CrearParadaIntermediaDto) {
    const parada = this.repo.create({ ...dto, id: uuidv4() });
    return this.repo.save(parada);
  }

  buscarTodos() {
    return this.repo.find();
  }

  buscarUno(id: string) {
    return this.repo.findOneBy({ id });
  }

  actualizar(id: string, dto: ActualizarParadaIntermediaDto) {
    return this.repo.update(id, dto);
  }

  eliminar(id: string) {
    return this.repo.delete(id);
  }
}
