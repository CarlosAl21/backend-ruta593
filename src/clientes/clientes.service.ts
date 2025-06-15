import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entidades/cliente.entity';
import { CrearClienteDto } from './dto/crear-cliente.dto';
import { ActualizarClienteDto } from './dto/actualizar-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly repo: Repository<Cliente>,
  ) {}

  crear(dto: CrearClienteDto) {
    const cliente = this.repo.create(dto);
    return this.repo.save(cliente);
  }

  buscarTodos() {
    return this.repo.find();
  }

  buscarUno(dni: string) {
    return this.repo.findOneBy({ dni });
  }

  actualizar(dni: string, dto: ActualizarClienteDto) {
    return this.repo.update(dni, dto);
  }

  eliminar(dni: string) {
    return this.repo.delete(dni);
  }
}
