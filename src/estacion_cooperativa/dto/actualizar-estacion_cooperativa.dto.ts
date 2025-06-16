import { ApiPropertyOptional } from '@nestjs/swagger';

export class ActualizarEstacionCooperativaDto {
  @ApiPropertyOptional({ description: 'ID de la estación', example: 'estacion123' })
  readonly id_estacion?: string;

  @ApiPropertyOptional({ description: 'ID de la cooperativa', example: 'coop123' })
  readonly id_cooperativa?: string;
}
