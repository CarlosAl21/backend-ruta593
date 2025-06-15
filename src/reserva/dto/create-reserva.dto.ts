import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { EstadoReserva, MetodoPago } from 'src/common/enums/reserva.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReservaDto {
  @ApiProperty({
    description: 'UID del usuario que realiza la reserva',
    example: 'uuid-string',
  })
  @IsString()
  usuario_id: string;

  @ApiProperty({
    description: 'UID del asiento a reservar',
    example: 'uuid-string',
  })
  @IsString()
  asiento_id: string;

  @ApiProperty({
    description: 'ID de la frecuencia del viaje',
    example: 1,
  })
  @IsNotEmpty()
  @IsString()
  frecuencia_id: string;

  @ApiProperty({
    description: 'Nombre del pasajero',
    example: 'Juan Pérez',
    required: false,
  })
  @IsOptional()
  @IsString()
  nombre_pasajero?: string;

  @ApiProperty({
    description: 'Método de pago de la reserva',
    enum: MetodoPago,
    example: MetodoPago.PRESENCIAL,
    default: MetodoPago.PRESENCIAL,
    required: false,
  })
  @IsEnum(MetodoPago)
  @IsOptional()
  metodo_pago: MetodoPago = MetodoPago.PRESENCIAL;

  @ApiProperty({
    description: 'Número de identificación del pasajero',
    example: '1234567890',
    required: false,
  })
  @IsOptional()
  @IsString()
  identificacion_pasajero?: string;

  @ApiProperty({
    description: 'Estado de la reserva',
    enum: EstadoReserva,
    example: EstadoReserva.PENDIENTE,
    default: EstadoReserva.PENDIENTE,
    required: false,
  })
  @IsOptional()
  @IsEnum(EstadoReserva)
  estado?: EstadoReserva;

  @ApiProperty({
    description: 'Fecha del viaje',
    example: '2025-01-15T00:00:00.000Z',
    type: Date,
  })
  @IsDate()
  @Type(() => Date)
  fecha_viaje: Date;

  @ApiProperty({
    description: 'Hora del viaje en formato HH:mm',
    example: '14:30',
    required: false,
  })
  @IsOptional()
  @IsString()
  hora_viaje?: string;

  @ApiProperty({
    description: 'Precio de la reserva',
    example: 25.5,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  precio?: number;

  @ApiProperty({
    description: 'Destino de la reserva',
    example: 'Bogotá',
    required: true,
  })
  @IsString()
  destino_reserva: string;

  @ApiProperty({
    description: 'Código de descuento promocional',
    example: 'PROMO2024',
    required: false,
  })
  @IsOptional()
  @IsString()
  codigo_descuento?: string;
}
