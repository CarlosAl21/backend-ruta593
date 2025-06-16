import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { MetodosPagoService } from './metodos_pago.service';
import { CrearMetodoPagoDto } from './dto/crear-metodo_pago.dto';
import { ActualizarMetodoPagoDto } from './dto/actualizar-metodo_pago.dto';

@ApiTags('metodos-pago')
@Controller('metodos-pago')
export class MetodosPagoController {
  constructor(private readonly service: MetodosPagoService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo método de pago' })
  @ApiBody({ type: CrearMetodoPagoDto })
  @ApiResponse({ status: 201, description: 'Método de pago creado exitosamente.' })
  crear(@Body() dto: CrearMetodoPagoDto) {
    return this.service.crear(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los métodos de pago' })
  @ApiResponse({ status: 200, description: 'Lista de métodos de pago.' })
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un método de pago por ID' })
  @ApiParam({ name: 'id', description: 'ID del método de pago' })
  @ApiResponse({ status: 200, description: 'Método de pago encontrado.' })
  buscarUno(@Param('id') id: string) {
    return this.service.buscarUno(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un método de pago por ID' })
  @ApiParam({ name: 'id', description: 'ID del método de pago' })
  @ApiBody({ type: ActualizarMetodoPagoDto })
  @ApiResponse({ status: 200, description: 'Método de pago actualizado.' })
  actualizar(@Param('id') id: string, @Body() dto: ActualizarMetodoPagoDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un método de pago por ID' })
  @ApiParam({ name: 'id', description: 'ID del método de pago' })
  @ApiResponse({ status: 200, description: 'Método de pago eliminado.' })
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
