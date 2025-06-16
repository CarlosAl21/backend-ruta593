import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { AdministradoresService } from './administradores.service';
import { CrearAdministradorDto } from './dto/crear-administrador.dto';
import { ActualizarAdministradorDto } from './dto/actualizar-administrador.dto';

@ApiTags('administradores')
@Controller('administradores')
export class AdministradoresController {
  constructor(private readonly service: AdministradoresService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo administrador' })
  @ApiBody({ type: CrearAdministradorDto })
  @ApiResponse({ status: 201, description: 'Administrador creado exitosamente.' })
  crear(@Body() dto: CrearAdministradorDto) {
    return this.service.crear(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los administradores' })
  @ApiResponse({ status: 200, description: 'Lista de administradores.' })
  buscarTodos() {
    return this.service.buscarTodos();
  }

  @Get(':dni')
  @ApiOperation({ summary: 'Obtener un administrador por DNI' })
  @ApiParam({ name: 'dni', description: 'DNI del administrador' })
  @ApiResponse({ status: 200, description: 'Administrador encontrado.' })
  buscarUno(@Param('dni') dni: string) {
    return this.service.buscarUno(dni);
  }

  @Put(':dni')
  @ApiOperation({ summary: 'Actualizar un administrador por DNI' })
  @ApiParam({ name: 'dni', description: 'DNI del administrador' })
  @ApiBody({ type: ActualizarAdministradorDto })
  @ApiResponse({ status: 200, description: 'Administrador actualizado.' })
  actualizar(@Param('dni') dni: string, @Body() dto: ActualizarAdministradorDto) {
    return this.service.actualizar(dni, dto);
  }

  @Delete(':dni')
  @ApiOperation({ summary: 'Eliminar un administrador por DNI' })
  @ApiParam({ name: 'dni', description: 'DNI del administrador' })
  @ApiResponse({ status: 200, description: 'Administrador eliminado.' })
  eliminar(@Param('dni') dni: string) {
    return this.service.eliminar(dni);
  }
}
