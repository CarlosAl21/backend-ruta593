import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { TerminalesService } from './terminales.service';
import { CrearTerminalDto } from './dto/crear-terminal.dto';
import { ActualizarTerminalDto } from './dto/actualizar-terminal.dto';

@ApiTags('terminales')
@Controller('terminales')
export class TerminalesController {
  constructor(private readonly service: TerminalesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva terminal' })
  @ApiBody({ type: CrearTerminalDto })
  @ApiResponse({ status: 201, description: 'Terminal creada exitosamente.' })
  crear(@Body() dto: CrearTerminalDto) {
    return this.service.crear(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las terminales' })
  @ApiResponse({ status: 200, description: 'Lista de terminales.' })
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una terminal por ID' })
  @ApiParam({ name: 'id', description: 'ID de la terminal' })
  @ApiResponse({ status: 200, description: 'Terminal encontrada.' })
  buscarUno(@Param('id') id: string) {
    return this.service.buscarUno(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una terminal por ID' })
  @ApiParam({ name: 'id', description: 'ID de la terminal' })
  @ApiBody({ type: ActualizarTerminalDto })
  @ApiResponse({ status: 200, description: 'Terminal actualizada.' })
  actualizar(@Param('id') id: string, @Body() dto: ActualizarTerminalDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una terminal por ID' })
  @ApiParam({ name: 'id', description: 'ID de la terminal' })
  @ApiResponse({ status: 200, description: 'Terminal eliminada.' })
  eliminar(@Param('id') id: string) {
    return this.service.eliminar(id);
  }
}
