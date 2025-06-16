import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { DescuentosService } from './descuentos.service';
import { CreateDescuentoDto } from './dto/create-descuento.dto';
import { UpdateDescuentoDto } from './dto/update-descuento.dto';

@ApiTags('descuentos')
@Controller('descuentos')
export class DescuentosController {
  constructor(private readonly descuentosService: DescuentosService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo descuento' })
  @ApiBody({ type: CreateDescuentoDto })
  @ApiResponse({ status: 201, description: 'Descuento creado exitosamente.' })
  create(@Body() createDescuentoDto: CreateDescuentoDto) {
    return this.descuentosService.create(createDescuentoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los descuentos' })
  @ApiResponse({ status: 200, description: 'Lista de descuentos.' })
  findAll() {
    return this.descuentosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un descuento por ID' })
  @ApiParam({ name: 'id', description: 'ID del descuento' })
  @ApiResponse({ status: 200, description: 'Descuento encontrado.' })
  findOne(@Param('id') id: string) {
    return this.descuentosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un descuento por ID' })
  @ApiParam({ name: 'id', description: 'ID del descuento' })
  @ApiBody({ type: UpdateDescuentoDto })
  @ApiResponse({ status: 200, description: 'Descuento actualizado.' })
  update(@Param('id') id: string, @Body() updateDescuentoDto: UpdateDescuentoDto) {
    return this.descuentosService.update(id, updateDescuentoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un descuento por ID' })
  @ApiParam({ name: 'id', description: 'ID del descuento' })
  @ApiResponse({ status: 200, description: 'Descuento eliminado.' })
  remove(@Param('id') id: string) {
    return this.descuentosService.remove(id);
  }
}
