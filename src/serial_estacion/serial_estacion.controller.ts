import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SerialEstacionService } from './serial_estacion.service';
import { CrearSerialEstacionDto } from './dto/crear-serial_estacion.dto';
import { ActualizarSerialEstacionDto } from './dto/actualizar-serial_estacion.dto';

@Controller('serial-estacion')
export class SerialEstacionController {
  constructor(private readonly service: SerialEstacionService) {}

  @Post()
  crear(@Body() dto: CrearSerialEstacionDto) {
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
  actualizar(@Param('id') id: string, @Body() dto: ActualizarSerialEstacionDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
