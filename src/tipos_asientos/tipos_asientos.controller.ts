import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TiposAsientosService } from './tipos_asientos.service';
import { CrearTipoAsientoDto } from './dto/crear-tipo_asiento.dto';
import { ActualizarTipoAsientoDto } from './dto/actualizar-tipo_asiento.dto';

@Controller('tipos-asientos')
export class TiposAsientosController {
  constructor(private readonly service: TiposAsientosService) {}

  @Post()
  crear(@Body() dto: CrearTipoAsientoDto) {
    return this.service.crear(dto);
  }

  @Get()
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':id')
  buscarUno(@Param('id') id: number) {
    return this.service.buscarUno(id);
  }

  @Put(':id')
  actualizar(@Param('id') id: number, @Body() dto: ActualizarTipoAsientoDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.service.eliminar(id);
  }
}
