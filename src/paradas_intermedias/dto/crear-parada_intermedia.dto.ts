import { ApiProperty } from '@nestjs/swagger';

export class CrearParadaIntermediaDto {
  @ApiProperty({ description: 'ID de la ruta', example: 'ruta123' })
  readonly id_ruta: string;

  @ApiProperty({ description: 'ID de la estación', example: 'estacion123' })
  readonly id_estacion: string;

  @ApiProperty({ description: 'Orden de la parada intermedia', example: 2 })
  readonly orden: number;
}
