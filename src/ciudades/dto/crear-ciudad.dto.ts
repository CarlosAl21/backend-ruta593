import { ApiProperty } from '@nestjs/swagger';

export class CrearCiudadDto {
  @ApiProperty({ description: 'ID de la provincia', example: 'provincia123' })
  readonly id_provincia: string;

  @ApiProperty({ description: 'Nombre de la ciudad', example: 'Quito' })
  readonly nombre: string;
}
