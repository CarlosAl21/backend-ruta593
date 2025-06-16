import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { PagosService } from './pagos.service';
import { CrearPagoDto } from './dto/crear-pago.dto';
import { ActualizarPagoDto } from './dto/actualizar-pago.dto';

@ApiTags('pagos')
@Controller('pagos')
export class PagosController {
  constructor(private readonly service: PagosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo pago' })
  @ApiBody({ type: CrearPagoDto })
  @ApiResponse({ status: 201, description: 'Pago creado exitosamente.' })
  crear(@Body() dto: CrearPagoDto) {
    return this.service.crear(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los pagos' })
  @ApiResponse({ status: 200, description: 'Lista de pagos.' })
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un pago por ID' })
  @ApiParam({ name: 'id', description: 'ID del pago' })
  @ApiResponse({ status: 200, description: 'Pago encontrado.' })
  buscarUno(@Param('id') id: string) {
    return this.service.buscarUno(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un pago por ID' })
  @ApiParam({ name: 'id', description: 'ID del pago' })
  @ApiBody({ type: ActualizarPagoDto })
  @ApiResponse({ status: 200, description: 'Pago actualizado.' })
  actualizar(@Param('id') id: string, @Body() dto: ActualizarPagoDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un pago por ID' })
  @ApiParam({ name: 'id', description: 'ID del pago' })
  @ApiResponse({ status: 200, description: 'Pago eliminado.' })
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
