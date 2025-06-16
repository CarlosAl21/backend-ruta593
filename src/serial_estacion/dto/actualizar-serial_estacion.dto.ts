import { ApiPropertyOptional } from '@nestjs/swagger';

export class ActualizarSerialEstacionDto {
  @ApiPropertyOptional({ description: 'ID de la estación', example: 'estacion123' })
  readonly id_estacion?: string;

  @ApiPropertyOptional({ description: 'ID del usuario', example: 'usuario123' })
  readonly id_usuario?: string;

  @ApiPropertyOptional({ description: 'Número de serie', example: 'SN-001-2024' })
  readonly numero_serie?: string;

  @ApiPropertyOptional({ description: 'Estado del serial', example: 'activo' })
  readonly estado?: string;
}
