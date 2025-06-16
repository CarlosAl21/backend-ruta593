import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { TiposAsientosService } from './tipos_asientos.service';
import { CrearTipoAsientoDto } from './dto/crear-tipo_asiento.dto';
import { ActualizarTipoAsientoDto } from './dto/actualizar-tipo_asiento.dto';

@ApiTags('tipos-asientos')
@Controller('tipos-asientos')
export class TiposAsientosController {
  constructor(private readonly service: TiposAsientosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo tipo de asiento' })
  @ApiBody({ type: CrearTipoAsientoDto })
  @ApiResponse({ status: 201, description: 'Tipo de asiento creado exitosamente.' })
  crear(@Body() dto: CrearTipoAsientoDto) {
    return this.service.crear(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los tipos de asientos' })
  @ApiResponse({ status: 200, description: 'Lista de tipos de asientos.' })
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un tipo de asiento por ID' })
  @ApiParam({ name: 'id', description: 'ID del tipo de asiento' })
  @ApiResponse({ status: 200, description: 'Tipo de asiento encontrado.' })
  buscarUno(@Param('id') id: number) {
    return this.service.buscarUno(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un tipo de asiento por ID' })
  @ApiParam({ name: 'id', description: 'ID del tipo de asiento' })
  @ApiBody({ type: ActualizarTipoAsientoDto })
  @ApiResponse({ status: 200, description: 'Tipo de asiento actualizado.' })
  actualizar(@Param('id') id: number, @Body() dto: ActualizarTipoAsientoDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un tipo de asiento por ID' })
  @ApiParam({ name: 'id', description: 'ID del tipo de asiento' })
  @ApiResponse({ status: 200, description: 'Tipo de asiento eliminado.' })
  eliminar(@Param('id') id: number) {
    return this.service.eliminar(id);
  }
}
