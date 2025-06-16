import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { SerialEstacionService } from './serial_estacion.service';
import { CrearSerialEstacionDto } from './dto/crear-serial_estacion.dto';
import { ActualizarSerialEstacionDto } from './dto/actualizar-serial_estacion.dto';

@ApiTags('serial-estacion')
@Controller('serial-estacion')
export class SerialEstacionController {
  constructor(private readonly service: SerialEstacionService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo serial de estación' })
  @ApiBody({ type: CrearSerialEstacionDto })
  @ApiResponse({ status: 201, description: 'Serial de estación creado exitosamente.' })
  crear(@Body() dto: CrearSerialEstacionDto) {
    return this.service.crear(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los seriales de estación' })
  @ApiResponse({ status: 200, description: 'Lista de seriales de estación.' })
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un serial de estación por ID' })
  @ApiParam({ name: 'id', description: 'ID del serial de estación' })
  @ApiResponse({ status: 200, description: 'Serial de estación encontrado.' })
  buscarUno(@Param('id') id: string) {
    return this.service.buscarUno(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un serial de estación por ID' })
  @ApiParam({ name: 'id', description: 'ID del serial de estación' })
  @ApiBody({ type: ActualizarSerialEstacionDto })
  @ApiResponse({ status: 200, description: 'Serial de estación actualizado.' })
  actualizar(@Param('id') id: string, @Body() dto: ActualizarSerialEstacionDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un serial de estación por ID' })
  @ApiParam({ name: 'id', description: 'ID del serial de estación' })
  @ApiResponse({ status: 200, description: 'Serial de estación eliminado.' })
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
