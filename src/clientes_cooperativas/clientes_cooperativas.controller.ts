import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ClientesCooperativasService } from './clientes_cooperativas.service';
import { CrearClienteCooperativaDto } from './dto/crear-cliente_cooperativa.dto';
import { ActualizarClienteCooperativaDto } from './dto/actualizar-cliente_cooperativa.dto';

@Controller('clientes-cooperativas')
export class ClientesCooperativasController {
  constructor(private readonly service: ClientesCooperativasService) {}

  @Post()
  crear(@Body() dto: CrearClienteCooperativaDto) {
    return this.service.crear(dto);
  }

  @Get()
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':id')
  buscarUno(@Param('id') id: string) {
    return this.service.buscarUno(id);
  }

  @Put(':id')
  actualizar(@Param('id') id: number, @Body() dto: ActualizarClienteCooperativaDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.service.eliminar(id);
  }
}
