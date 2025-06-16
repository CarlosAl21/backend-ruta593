import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ClientesCooperativasService } from './clientes_cooperativas.service';
import { CrearClienteCooperativaDto } from './dto/crear-cliente_cooperativa.dto';
import { ActualizarClienteCooperativaDto } from './dto/actualizar-cliente_cooperativa.dto';

@ApiTags('clientes-cooperativas')
@Controller('clientes-cooperativas')
export class ClientesCooperativasController {
  constructor(private readonly service: ClientesCooperativasService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva relación cliente-cooperativa' })
  @ApiBody({ type: CrearClienteCooperativaDto })
  @ApiResponse({ status: 201, description: 'Relación cliente-cooperativa creada exitosamente.' })
  crear(@Body() dto: CrearClienteCooperativaDto) {
    return this.service.crear(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todas las relaciones cliente-cooperativa' })
  @ApiResponse({ status: 200, description: 'Lista de relaciones cliente-cooperativa.' })
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una relación cliente-cooperativa por ID' })
  @ApiParam({ name: 'id', description: 'ID de la relación cliente-cooperativa' })
  @ApiResponse({ status: 200, description: 'Relación cliente-cooperativa encontrada.' })
  buscarUno(@Param('id') id: string) {
    return this.service.buscarUno(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una relación cliente-cooperativa por ID' })
  @ApiParam({ name: 'id', description: 'ID de la relación cliente-cooperativa' })
  @ApiBody({ type: ActualizarClienteCooperativaDto })
  @ApiResponse({ status: 200, description: 'Relación cliente-cooperativa actualizada.' })
  actualizar(@Param('id') id: number, @Body() dto: ActualizarClienteCooperativaDto) {
    return this.service.actualizar(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una relación cliente-cooperativa por ID' })
  @ApiParam({ name: 'id', description: 'ID de la relación cliente-cooperativa' })
  @ApiResponse({ status: 200, description: 'Relación cliente-cooperativa eliminada.' })
  eliminar(@Param('id') id: number) {
    return this.service.eliminar(id);
  }
}
