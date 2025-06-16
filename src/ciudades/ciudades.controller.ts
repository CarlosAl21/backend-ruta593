import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CiudadesService } from './ciudades.service';
import { CrearCiudadDto } from './dto/crear-ciudad.dto';
import { ActualizarCiudadDto } from './dto/actualizar-ciudad.dto';

@ApiTags('ciudades')
@Controller('ciudades')
export class CiudadesController {
  constructor(private readonly service: CiudadesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva ciudad' })
  @ApiBody({ type: CrearCiudadDto })
  @ApiResponse({ status: 201, description: 'Ciudad creada exitosamente.' })
  crear(@Body() dto: CrearCiudadDto) {
    return this.service.crear(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las ciudades' })
  @ApiResponse({ status: 200, description: 'Lista de ciudades.' })
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una ciudad por ID' })
  @ApiParam({ name: 'id', description: 'ID de la ciudad' })
  @ApiResponse({ status: 200, description: 'Ciudad encontrada.' })
  buscarUno(@Param('id') id: string) {
    return this.service.buscarUno(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una ciudad por ID' })
  @ApiParam({ name: 'id', description: 'ID de la ciudad' })
  @ApiBody({ type: ActualizarCiudadDto })
  @ApiResponse({ status: 200, description: 'Ciudad actualizada.' })
  actualizar(@Param('id') id: string, @Body() dto: ActualizarCiudadDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una ciudad por ID' })
  @ApiParam({ name: 'id', description: 'ID de la ciudad' })
  @ApiResponse({ status: 200, description: 'Ciudad eliminada.' })
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
