import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Terminal } from './entidades/terminal.entity';
import { CrearTerminalDto } from './dto/crear-terminal.dto';
import { ActualizarTerminalDto } from './dto/actualizar-terminal.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TerminalesService {
  constructor(
    @InjectRepository(Terminal)
    private readonly repo: Repository<Terminal>,
  ) {}

  crear(dto: CrearTerminalDto) {
    const terminal = this.repo.create({ ...dto, id: uuidv4() });
    return this.repo.save(terminal);
  }

  buscarTodos() {
    return this.repo.find();
  }

  buscarUno(id: string) {
    return this.repo.findOneBy({ id });
  }

  actualizar(id: string, dto: ActualizarTerminalDto) {
    return this.repo.update(id, dto);
  }

  eliminar(id: string) {
    return this.repo.delete(id);
  }
}
