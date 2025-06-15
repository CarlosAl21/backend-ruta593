import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CiudadesService } from './ciudades.service';
import { CrearCiudadDto } from './dto/crear-ciudad.dto';
import { ActualizarCiudadDto } from './dto/actualizar-ciudad.dto';

@Controller('ciudades')
export class CiudadesController {
  constructor(private readonly service: CiudadesService) {}

  @Post()
  crear(@Body() dto: CrearCiudadDto) {
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
  actualizar(@Param('id') id: string, @Body() dto: ActualizarCiudadDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
