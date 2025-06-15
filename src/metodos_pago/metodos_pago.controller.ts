import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MetodosPagoService } from './metodos_pago.service';
import { CrearMetodoPagoDto } from './dto/crear-metodo_pago.dto';
import { ActualizarMetodoPagoDto } from './dto/actualizar-metodo_pago.dto';

@Controller('metodos-pago')
export class MetodosPagoController {
  constructor(private readonly service: MetodosPagoService) {}

  @Post()
  crear(@Body() dto: CrearMetodoPagoDto) {
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
  actualizar(@Param('id') id: string, @Body() dto: ActualizarMetodoPagoDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
