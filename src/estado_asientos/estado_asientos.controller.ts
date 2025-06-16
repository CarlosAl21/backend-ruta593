import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { EstadoAsientosService } from './estado_asientos.service';
import { CrearEstadoAsientoDto } from './dto/crear-estado_asiento.dto';
import { ActualizarEstadoAsientoDto } from './dto/actualizar-estado_asiento.dto';

@ApiTags('estado-asientos')
@Controller('estado-asientos')
export class EstadoAsientosController {
  constructor(private readonly service: EstadoAsientosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo estado de asiento' })
  @ApiBody({ type: CrearEstadoAsientoDto })
  @ApiResponse({ status: 201, description: 'Estado de asiento creado exitosamente.' })
  crear(@Body() dto: CrearEstadoAsientoDto) {
    return this.service.crear(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los estados de asientos' })
  @ApiResponse({ status: 200, description: 'Lista de estados de asientos.' })
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un estado de asiento por ID' })
  @ApiParam({ name: 'id', description: 'ID del estado de asiento' })
  @ApiResponse({ status: 200, description: 'Estado de asiento encontrado.' })
  buscarUno(@Param('id') id:  string) {
    return this.service.buscarUno(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un estado de asiento por ID' })
  @ApiParam({ name: 'id', description: 'ID del estado de asiento' })
  @ApiBody({ type: ActualizarEstadoAsientoDto })
  @ApiResponse({ status: 200, description: 'Estado de asiento actualizado.' })
  actualizar(@Param('id') id: number, @Body() dto: ActualizarEstadoAsientoDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un estado de asiento por ID' })
  @ApiParam({ name: 'id', description: 'ID del estado de asiento' })
  @ApiResponse({ status: 200, description: 'Estado de asiento eliminado.' })
  eliminar(@Param('id') id: number) {
    return this.service.eliminar(id);
  }
}
