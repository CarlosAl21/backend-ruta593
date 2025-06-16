import { ApiPropertyOptional } from '@nestjs/swagger';

export class ActualizarEstadoAsientoDto {
  @ApiPropertyOptional({ description: 'ID del asiento', example: 1 })
  readonly id_asiento?: number;

  @ApiPropertyOptional({ description: 'ID de la frecuencia', example: 10 })
  readonly id_frecuencia?: number;

  @ApiPropertyOptional({ description: 'Estado del asiento', example: 'reservado' })
  readonly estado?: string;

  @ApiPropertyOptional({ description: 'Fecha de la reserva', example: '2024-06-01T12:00:00Z', type: Date })
  readonly fecha_reserva?: Date;

  @ApiPropertyOptional({ description: 'DNI del cliente', example: '1234567890' })
  readonly dni_cliente?: string;
}
