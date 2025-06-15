import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CrearClienteDto } from './dto/crear-cliente.dto';
import { ActualizarClienteDto } from './dto/actualizar-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly service: ClientesService) {}

  @Post()
  crear(@Body() dto: CrearClienteDto) {
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
  actualizar(@Param('dni') dni: string, @Body() dto: ActualizarClienteDto) {
    return this.service.actualizar(dni, dto);
  }

  @Delete(':dni')
  eliminar(@Param('dni') dni: string) {
    return this.service.eliminar(dni);
  }
}
