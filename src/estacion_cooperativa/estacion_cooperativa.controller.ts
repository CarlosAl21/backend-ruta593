import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EstacionCooperativaService } from './estacion_cooperativa.service';
import { CrearEstacionCooperativaDto } from './dto/crear-estacion_cooperativa.dto';
import { ActualizarEstacionCooperativaDto } from './dto/actualizar-estacion_cooperativa.dto';

@Controller('estacion-cooperativa')
export class EstacionCooperativaController {
  constructor(private readonly service: EstacionCooperativaService) {}

  @Post()
  crear(@Body() dto: CrearEstacionCooperativaDto) {
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
  actualizar(@Param('id') id: string, @Body() dto: ActualizarEstacionCooperativaDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
