import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ParadasIntermediasService } from './paradas_intermedias.service';
import { CrearParadaIntermediaDto } from './dto/crear-parada_intermedia.dto';
import { ActualizarParadaIntermediaDto } from './dto/actualizar-parada_intermedia.dto';

@ApiTags('paradas-intermedias')
@Controller('paradas-intermedias')
export class ParadasIntermediasController {
  constructor(private readonly service: ParadasIntermediasService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva parada intermedia' })
  @ApiBody({ type: CrearParadaIntermediaDto })
  @ApiResponse({ status: 201, description: 'Parada intermedia creada exitosamente.' })
  crear(@Body() dto: CrearParadaIntermediaDto) {
    return this.service.crear(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las paradas intermedias' })
  @ApiResponse({ status: 200, description: 'Lista de paradas intermedias.' })
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una parada intermedia por ID' })
  @ApiParam({ name: 'id', description: 'ID de la parada intermedia' })
  @ApiResponse({ status: 200, description: 'Parada intermedia encontrada.' })
  buscarUno(@Param('id') id: string) {
    return this.service.buscarUno(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una parada intermedia por ID' })
  @ApiParam({ name: 'id', description: 'ID de la parada intermedia' })
  @ApiBody({ type: ActualizarParadaIntermediaDto })
  @ApiResponse({ status: 200, description: 'Parada intermedia actualizada.' })
  actualizar(@Param('id') id: string, @Body() dto: ActualizarParadaIntermediaDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una parada intermedia por ID' })
  @ApiParam({ name: 'id', description: 'ID de la parada intermedia' })
  @ApiResponse({ status: 200, description: 'Parada intermedia eliminada.' })
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
