import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ProvinciasService } from './provincias.service';
import { CrearProvinciaDto } from './dto/crear-provincia.dto';
import { ActualizarProvinciaDto } from './dto/actualizar-provincia.dto';

@ApiTags('provincias')
@Controller('provincias')
export class ProvinciasController {
  constructor(private readonly service: ProvinciasService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva provincia' })
  @ApiBody({ type: CrearProvinciaDto })
  @ApiResponse({ status: 201, description: 'Provincia creada exitosamente.' })
  crear(@Body() dto: CrearProvinciaDto) {
    return this.service.crear(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las provincias' })
  @ApiResponse({ status: 200, description: 'Lista de provincias.' })
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una provincia por ID' })
  @ApiParam({ name: 'id', description: 'ID de la provincia' })
  @ApiResponse({ status: 200, description: 'Provincia encontrada.' })
  buscarUno(@Param('id') id: string) {
    return this.service.buscarUno(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una provincia por ID' })
  @ApiParam({ name: 'id', description: 'ID de la provincia' })
  @ApiBody({ type: ActualizarProvinciaDto })
  @ApiResponse({ status: 200, description: 'Provincia actualizada.' })
  actualizar(@Param('id') id: string, @Body() dto: ActualizarProvinciaDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una provincia por ID' })
  @ApiParam({ name: 'id', description: 'ID de la provincia' })
  @ApiResponse({ status: 200, description: 'Provincia eliminada.' })
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
