import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ClientesService } from './clientes.service';
import { CrearClienteDto } from './dto/crear-cliente.dto';
import { ActualizarClienteDto } from './dto/actualizar-cliente.dto';

@ApiTags('clientes')
@Controller('clientes')
export class ClientesController {
  constructor(private readonly service: ClientesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo cliente' })
  @ApiBody({ type: CrearClienteDto })
  @ApiResponse({ status: 201, description: 'Cliente creado exitosamente.' })
  crear(@Body() dto: CrearClienteDto) {
    return this.service.crear(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los clientes' })
  @ApiResponse({ status: 200, description: 'Lista de clientes.' })
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':dni')
  @ApiOperation({ summary: 'Obtener un cliente por DNI' })
  @ApiParam({ name: 'dni', description: 'DNI del cliente' })
  @ApiResponse({ status: 200, description: 'Cliente encontrado.' })
  buscarUno(@Param('dni') dni: string) {
    return this.service.buscarUno(dni);
  }

  @Put(':dni')
  @ApiOperation({ summary: 'Actualizar un cliente por DNI' })
  @ApiParam({ name: 'dni', description: 'DNI del cliente' })
  @ApiBody({ type: ActualizarClienteDto })
  @ApiResponse({ status: 200, description: 'Cliente actualizado.' })
  actualizar(@Param('dni') dni: string, @Body() dto: ActualizarClienteDto) {
    return this.service.actualizar(dni, dto);
  }

  @Delete(':dni')
  @ApiOperation({ summary: 'Eliminar un cliente por DNI' })
  @ApiParam({ name: 'dni', description: 'DNI del cliente' })
  @ApiResponse({ status: 200, description: 'Cliente eliminado.' })
  eliminar(@Param('dni') dni: string) {
    return this.service.eliminar(dni);
  }
}
