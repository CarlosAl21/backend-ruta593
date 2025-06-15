import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProvinciasService } from './provincias.service';
import { CrearProvinciaDto } from './dto/crear-provincia.dto';
import { ActualizarProvinciaDto } from './dto/actualizar-provincia.dto';

@Controller('provincias')
export class ProvinciasController {
  constructor(private readonly service: ProvinciasService) {}

  @Post()
  crear(@Body() dto: CrearProvinciaDto) {
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
  actualizar(@Param('id') id: string, @Body() dto: ActualizarProvinciaDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
