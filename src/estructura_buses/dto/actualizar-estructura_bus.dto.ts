import { ApiPropertyOptional } from '@nestjs/swagger';

export class ActualizarEstructuraBusDto {
  @ApiPropertyOptional({ description: 'Nombre de la estructura del bus', example: 'Bus Escolar' })
  readonly nombre?: string;

  @ApiPropertyOptional({ description: 'Distribución de asientos o características', example: '2-2' })
  readonly distribucion?: string;

  @ApiPropertyOptional({ description: 'ID de la cooperativa asociada', example: 1 })
  readonly id_cooperativa?: number;
}
