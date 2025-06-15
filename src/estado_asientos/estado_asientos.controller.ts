import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EstadoAsientosService } from './estado_asientos.service';
import { CrearEstadoAsientoDto } from './dto/crear-estado_asiento.dto';
import { ActualizarEstadoAsientoDto } from './dto/actualizar-estado_asiento.dto';

@Controller('estado-asientos')
export class EstadoAsientosController {
  constructor(private readonly service: EstadoAsientosService) {}

  @Post()
  crear(@Body() dto: CrearEstadoAsientoDto) {
    return this.service.crear(dto);
  }

  @Get()
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':id')
  buscarUno(@Param('id') id:  string) {
    return this.service.buscarUno(id);
  }

  @Put(':id')
  actualizar(@Param('id') id: number, @Body() dto: ActualizarEstadoAsientoDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.service.eliminar(id);
  }
}
