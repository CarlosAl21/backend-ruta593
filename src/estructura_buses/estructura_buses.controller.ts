import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EstructuraBusesService } from './estructura_buses.service';
import { CrearEstructuraBusDto } from './dto/crear-estructura_bus.dto';
import { ActualizarEstructuraBusDto } from './dto/actualizar-estructura_bus.dto';

@Controller('estructura-buses')
export class EstructuraBusesController {
  constructor(private readonly service: EstructuraBusesService) {}

  @Post()
  crear(@Body() dto: CrearEstructuraBusDto) {
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
  actualizar(@Param('id') id: number, @Body() dto: ActualizarEstructuraBusDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return this.service.eliminar(id);
  }
}
