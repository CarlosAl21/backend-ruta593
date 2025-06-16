import { ApiProperty } from '@nestjs/swagger';

export class CrearEstructuraBusDto {
  @ApiProperty({ description: 'Nombre de la estructura del bus', example: 'Bus Escolar' })
  readonly nombre: string;

  @ApiProperty({ description: 'Distribución de asientos o características', example: '2-2' })
  readonly distribucion: string;

  @ApiProperty({ description: 'ID de la cooperativa asociada', example: 1 })
  readonly id_cooperativa: number;
}
