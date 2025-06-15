import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClienteCooperativa } from './entidades/cliente_cooperativa.entity';
import { CrearClienteCooperativaDto } from './dto/crear-cliente_cooperativa.dto';
import { ActualizarClienteCooperativaDto } from './dto/actualizar-cliente_cooperativa.dto';

@Injectable()
export class ClientesCooperativasService {
  constructor(
    @InjectRepository(ClienteCooperativa)
    private readonly repo: Repository<ClienteCooperativa>,
  ) {}

  crear(dto: CrearClienteCooperativaDto) {
    const registro = this.repo.create(dto);
    return this.repo.save(registro);
  }

  buscarTodos() {
    return this.repo.find();
  }

  buscarUno(id: string) {
    return this.repo.findOneBy({ id });
  }

  actualizar(id: number, dto: ActualizarClienteCooperativaDto) {
    return this.repo.update(id, dto);
  }

  eliminar(id: number) {
    return this.repo.delete(id);
  }
}
