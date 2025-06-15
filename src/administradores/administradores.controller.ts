import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AdministradoresService } from './administradores.service';
import { CrearAdministradorDto } from './dto/crear-administrador.dto';
import { ActualizarAdministradorDto } from './dto/actualizar-administrador.dto';

@Controller('administradores')
export class AdministradoresController {
  constructor(private readonly service: AdministradoresService) {}

  @Post()
  crear(@Body() dto: CrearAdministradorDto) {
    return this.service.crear(dto);
  }

  @Get()
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':dni')
  buscarUno(@Param('dni') dni: string) {
    return this.service.buscarUno(dni);
  }

  @Put(':dni')
  actualizar(@Param('dni') dni: string, @Body() dto: ActualizarAdministradorDto) {
    return this.service.actualizar(dni, dto);
  }

  @Delete(':dni')
  eliminar(@Param('dni') dni: string) {
    return this.service.eliminar(dni);
  }
}
