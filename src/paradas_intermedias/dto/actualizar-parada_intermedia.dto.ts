import { ApiPropertyOptional } from '@nestjs/swagger';

export class ActualizarParadaIntermediaDto {
  @ApiPropertyOptional({ description: 'ID de la ruta', example: 'ruta123' })
  readonly id_ruta?: string;

  @ApiPropertyOptional({ description: 'ID de la estación', example: 'estacion123' })
  readonly id_estacion?: string;

  @ApiPropertyOptional({ description: 'Orden de la parada intermedia', example: 2 })
  readonly orden?: number;
}
