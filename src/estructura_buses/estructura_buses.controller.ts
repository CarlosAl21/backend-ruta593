import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { EstructuraBusesService } from './estructura_buses.service';
import { CrearEstructuraBusDto } from './dto/crear-estructura_bus.dto';
import { ActualizarEstructuraBusDto } from './dto/actualizar-estructura_bus.dto';

@ApiTags('estructura-buses')
@Controller('estructura-buses')
export class EstructuraBusesController {
  constructor(private readonly service: EstructuraBusesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva estructura de bus' })
  @ApiBody({ type: CrearEstructuraBusDto })
  @ApiResponse({ status: 201, description: 'Estructura de bus creada exitosamente.' })
  crear(@Body() dto: CrearEstructuraBusDto) {
    return this.service.crear(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las estructuras de buses' })
  @ApiResponse({ status: 200, description: 'Lista de estructuras de buses.' })
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una estructura de bus por ID' })
  @ApiParam({ name: 'id', description: 'ID de la estructura de bus' })
  @ApiResponse({ status: 200, description: 'Estructura de bus encontrada.' })
  buscarUno(@Param('id') id: number) {
    return this.service.buscarUno(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una estructura de bus por ID' })
  @ApiParam({ name: 'id', description: 'ID de la estructura de bus' })
  @ApiBody({ type: ActualizarEstructuraBusDto })
  @ApiResponse({ status: 200, description: 'Estructura de bus actualizada.' })
  actualizar(@Param('id') id: number, @Body() dto: ActualizarEstructuraBusDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una estructura de bus por ID' })
  @ApiParam({ name: 'id', description: 'ID de la estructura de bus' })
  @ApiResponse({ status: 200, description: 'Estructura de bus eliminada.' })
  eliminar(@Param('id') id: number) {
    return this.service.eliminar(id);
  }
}
