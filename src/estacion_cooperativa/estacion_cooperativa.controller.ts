import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { EstacionCooperativaService } from './estacion_cooperativa.service';
import { CrearEstacionCooperativaDto } from './dto/crear-estacion_cooperativa.dto';
import { ActualizarEstacionCooperativaDto } from './dto/actualizar-estacion_cooperativa.dto';

@ApiTags('estacion-cooperativa')
@Controller('estacion-cooperativa')
export class EstacionCooperativaController {
  constructor(private readonly service: EstacionCooperativaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva relación estación-cooperativa' })
  @ApiBody({ type: CrearEstacionCooperativaDto })
  @ApiResponse({ status: 201, description: 'Relación estación-cooperativa creada exitosamente.' })
  crear(@Body() dto: CrearEstacionCooperativaDto) {
    return this.service.crear(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las relaciones estación-cooperativa' })
  @ApiResponse({ status: 200, description: 'Lista de relaciones estación-cooperativa.' })
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una relación estación-cooperativa por ID' })
  @ApiParam({ name: 'id', description: 'ID de la relación estación-cooperativa' })
  @ApiResponse({ status: 200, description: 'Relación estación-cooperativa encontrada.' })
  buscarUno(@Param('id') id: string) {
    return this.service.buscarUno(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una relación estación-cooperativa por ID' })
  @ApiParam({ name: 'id', description: 'ID de la relación estación-cooperativa' })
  @ApiBody({ type: ActualizarEstacionCooperativaDto })
  @ApiResponse({ status: 200, description: 'Relación estación-cooperativa actualizada.' })
  actualizar(@Param('id') id: string, @Body() dto: ActualizarEstacionCooperativaDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una relación estación-cooperativa por ID' })
  @ApiParam({ name: 'id', description: 'ID de la relación estación-cooperativa' })
  @ApiResponse({ status: 200, description: 'Relación estación-cooperativa eliminada.' })
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
