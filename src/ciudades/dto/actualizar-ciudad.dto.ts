import { ApiPropertyOptional } from '@nestjs/swagger';

export class ActualizarCiudadDto {
  @ApiPropertyOptional({ description: 'ID de la provincia', example: 'provincia123' })
  readonly id_provincia?: string;

  @ApiPropertyOptional({ description: 'Nombre de la ciudad', example: 'Quito' })
  readonly nombre?: string;
}
