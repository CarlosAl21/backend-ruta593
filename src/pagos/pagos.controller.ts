import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { CrearPagoDto } from './dto/crear-pago.dto';
import { ActualizarPagoDto } from './dto/actualizar-pago.dto';

@Controller('pagos')
export class PagosController {
  constructor(private readonly service: PagosService) {}

  @Post()
  crear(@Body() dto: CrearPagoDto) {
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
  actualizar(@Param('id') id: string, @Body() dto: ActualizarPagoDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
