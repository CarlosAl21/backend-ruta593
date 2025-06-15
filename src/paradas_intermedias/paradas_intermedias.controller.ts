import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ParadasIntermediasService } from './paradas_intermedias.service';
import { CrearParadaIntermediaDto } from './dto/crear-parada_intermedia.dto';
import { ActualizarParadaIntermediaDto } from './dto/actualizar-parada_intermedia.dto';

@Controller('paradas-intermedias')
export class ParadasIntermediasController {
  constructor(private readonly service: ParadasIntermediasService) {}

  @Post()
  crear(@Body() dto: CrearParadaIntermediaDto) {
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
  actualizar(@Param('id') id: string, @Body() dto: ActualizarParadaIntermediaDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
