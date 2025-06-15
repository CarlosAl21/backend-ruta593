import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SerialEstacion } from './entidades/serial_estacion.entity';
import { CrearSerialEstacionDto } from './dto/crear-serial_estacion.dto';
import { ActualizarSerialEstacionDto } from './dto/actualizar-serial_estacion.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SerialEstacionService {
  constructor(
    @InjectRepository(SerialEstacion)
    private readonly repo: Repository<SerialEstacion>,
  ) {}

  crear(dto: CrearSerialEstacionDto) {
    const serial = this.repo.create({ ...dto, id: uuidv4() });
    return this.repo.save(serial);
  }

  buscarTodos() {
    return this.repo.find();
  }

  buscarUno(id: string) {
    return this.repo.findOneBy({ id });
  }

  actualizar(id: string, dto: ActualizarSerialEstacionDto) {
    return this.repo.update(id, dto);
  }

  eliminar(id: string) {
    return this.repo.delete(id);
  }
}
