import { ApiPropertyOptional } from '@nestjs/swagger';

export class ActualizarProvinciaDto {
  @ApiPropertyOptional({ description: 'Nombre de la provincia', example: 'Pichincha' })
  readonly nombre?: string;
}
