import { ApiProperty } from '@nestjs/swagger';

export class CrearEstadoAsientoDto {
  @ApiProperty({ description: 'ID del asiento', example: 1 })
  readonly id_asiento: number;

  @ApiProperty({ description: 'ID de la frecuencia', example: 10 })
  readonly id_frecuencia: number;

  @ApiProperty({ description: 'Estado del asiento', example: 'reservado' })
  readonly estado: string;

  @ApiProperty({ description: 'Fecha de la reserva', example: '2024-06-01T12:00:00Z', required: false, type: Date })
  readonly fecha_reserva?: Date;

  @ApiProperty({ description: 'DNI del cliente', example: '1234567890', required: false })
  readonly dni_cliente?: string;
}
