import { ApiPropertyOptional } from '@nestjs/swagger';

export class ActualizarTipoAsientoDto {
  @ApiPropertyOptional({ description: 'ID de la cooperativa', example: 'coop123' })
  readonly cooperativa_id?: string;

  @ApiPropertyOptional({ description: 'Nombre del tipo de asiento', example: 'VIP' })
  readonly nombre?: string;

  @ApiPropertyOptional({ description: 'Característica especial del asiento', example: 'Reclinable' })
  readonly caracter_especial?: string;

  @ApiPropertyOptional({ description: 'Descripción del tipo de asiento', example: 'Asiento con mayor espacio y comodidad' })
  readonly descripcion?: string;

  @ApiPropertyOptional({ description: 'Costo adicional del tipo de asiento', example: 5.0 })
  readonly costo_adicional?: number;
}
