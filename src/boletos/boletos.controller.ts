import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoletosService } from './boletos.service';
import { CreateBoletoDto } from './dto/create-boleto.dto';
import { UpdateBoletoDto } from './dto/update-boleto.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('Boletos')
@Controller('boletos')
export class BoletosController {
  constructor(private readonly boletosService: BoletosService) {}

  @ApiOperation({ summary: 'Crear un nuevo boleto' })
  @ApiBody({ type: CreateBoletoDto })
  @ApiResponse({ 
    status: 201, 
    description: 'Boleto creado exitosamente',
    type: CreateBoletoDto
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Datos inválidos para crear el boleto'
  })
  @Post()
  create(@Body() createBoletoDto: CreateBoletoDto) {
    return this.boletosService.create(createBoletoDto);
  }

  @ApiOperation({ summary: 'Obtener todos los boletos' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de todos los boletos',
    type: [CreateBoletoDto]
  })
  @Get()
  findAll() {
    return this.boletosService.findAll();
  }

  @ApiOperation({ summary: 'Obtener boletos por usuario' })
  @ApiParam({ 
    name: 'userId', 
    description: 'ID del usuario',
    type: String,
    required: true
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de boletos del usuario',
    type: [CreateBoletoDto]
  })
  @ApiResponse({ 
    status: 404, 
    description: 'No se encontraron boletos para el usuario'
  })
  @Get('usuario/:userId')
  findAllByUserId(@Param('userId') userId: string) {
    return this.boletosService.findAllByUserId(userId);
  }

  @ApiOperation({ summary: 'Obtener un boleto por UID' })
  @ApiParam({ 
    name: 'uid', 
    description: 'UID del boleto',
    type: String,
    required: true
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Boleto encontrado',
    type: CreateBoletoDto
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Boleto no encontrado'
  })
  @Get(':uid')
  findOne(@Param('uid') uid: string) {
    return this.boletosService.findOne(uid);
  }

  @ApiOperation({ summary: 'Obtener boletos por reserva' })
  @ApiParam({ 
    name: 'reservaId', 
    description: 'ID de la reserva',
    type: String,
    required: true
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de boletos de la reserva',
    type: [CreateBoletoDto]
  })
  @ApiResponse({ 
    status: 404, 
    description: 'No se encontraron boletos para la reserva'
  })
  @Get('reserva/:reservaId')
  findByReservaId(@Param('reservaId') reservaId: string) {
    return this.boletosService.findByReservaId(reservaId);
  }

  @ApiOperation({ summary: 'Actualizar un boleto' })
  @ApiParam({ 
    name: 'uid', 
    description: 'UID del boleto a actualizar',
    type: String,
    required: true
  })
  @ApiBody({ type: UpdateBoletoDto })
  @ApiResponse({ 
    status: 200, 
    description: 'Boleto actualizado exitosamente',
    type: UpdateBoletoDto
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Boleto no encontrado'
  })
  @Patch(':uid')
  update(@Param('uid') uid: string, @Body() updateBoletoDto: UpdateBoletoDto) {
    return this.boletosService.update(uid, updateBoletoDto);
  }

  @ApiOperation({ summary: 'Eliminar un boleto' })
  @ApiParam({ 
    name: 'uid', 
    description: 'UID del boleto a eliminar',
    type: String,
    required: true
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Boleto eliminado exitosamente'
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Boleto no encontrado'
  })
  @Delete(':uid')
  remove(@Param('uid') uid: string) {
    return this.boletosService.remove(uid);
  }
}
