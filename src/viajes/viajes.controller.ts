import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { ViajesService } from './viajes.service';
import { CreateViajeDto } from './dto/create-viaje.dto';
import { UpdateViajeDto } from './dto/update-viaje.dto';

@ApiTags('viajes')
@Controller('viajes')
export class ViajesController {
  constructor(private readonly viajesService: ViajesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo viaje' })
  @ApiBody({ type: CreateViajeDto })
  @ApiResponse({ status: 201, description: 'Viaje creado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  @ApiResponse({ status: 404, description: 'Frecuencia no encontrada.' })
  @ApiResponse({ status: 409, description: 'Frecuencia no está activa.' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor.' })
  create(@Body() createViajeDto: CreateViajeDto) {
    return this.viajesService.create(createViajeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los viajes' })
  @ApiResponse({ status: 200, description: 'Lista de viajes.' })
  findAll() {
    return this.viajesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un viaje por ID' })
  @ApiParam({ name: 'id', description: 'ID del viaje' })
  @ApiResponse({ status: 200, description: 'Viaje encontrado.' })
  @ApiResponse({ status: 404, description: 'Viaje no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.viajesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un viaje' })
  @ApiParam({ name: 'id', description: 'ID del viaje' })
  @ApiBody({ type: UpdateViajeDto })
  @ApiResponse({ status: 200, description: 'Viaje actualizado.' })
  @ApiResponse({ status: 404, description: 'Viaje no encontrado.' })
  update(@Param('id') id: string, @Body() updateViajeDto: UpdateViajeDto) {
    return this.viajesService.update(id, updateViajeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un viaje' })
  @ApiParam({ name: 'id', description: 'ID del viaje' })
  @ApiResponse({ status: 200, description: 'Viaje eliminado.' })
  @ApiResponse({ status: 404, description: 'Viaje no encontrado.' })
  remove(@Param('id') id: string) {
    return this.viajesService.remove(id);
  }

  @Get('fcha/:fecha')
  @ApiOperation({ summary: 'Buscar viajes por fecha de salida' })
  @ApiParam({ name: 'fecha', description: 'Fecha de salida (YYYY-MM-DD)' })
  @ApiResponse({ status: 200, description: 'Viajes encontrados.' })
  @ApiResponse({ status: 404, description: 'No se encontraron viajes para la fecha especificada.' })
  findByFecha(@Param('fecha') fecha: Date) {
    return this.viajesService.findByFecha(fecha);
  }
}
