import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrador } from './entidades/administrador.entity';
import { CrearAdministradorDto } from './dto/crear-administrador.dto';
import { ActualizarAdministradorDto } from './dto/actualizar-administrador.dto';

@Injectable()
export class AdministradoresService {
  constructor(
    @InjectRepository(Administrador)
    private readonly repo: Repository<Administrador>,
  ) {}

  crear(dto: CrearAdministradorDto) {
    const admin = this.repo.create(dto);
    return this.repo.save(admin);
  }

  buscarTodos() {
    return this.repo.find();
  }

  buscarUno(dni: string) {
    return this.repo.findOneBy({ dni });
  }

  actualizar(dni: string, dto: ActualizarAdministradorDto) {
    return this.repo.update(dni, dto);
  }

  eliminar(dni: string) {
    return this.repo.delete(dni);
  }
}
