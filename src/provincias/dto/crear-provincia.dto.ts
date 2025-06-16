import { ApiProperty } from '@nestjs/swagger';

export class CrearProvinciaDto {
  @ApiProperty({ description: 'Nombre de la provincia', example: 'Pichincha' })
  readonly nombre: string;
}
