import { ApiProperty } from '@nestjs/swagger';

export class CrearEstacionCooperativaDto {
  @ApiProperty({ description: 'ID de la estación', example: 'estacion123' })
  readonly id_estacion: string;

  @ApiProperty({ description: 'ID de la cooperativa', example: 'coop123' })
  readonly id_cooperativa: string;
}
