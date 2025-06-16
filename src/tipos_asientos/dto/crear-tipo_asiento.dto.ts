import { ApiProperty } from '@nestjs/swagger';

export class CrearTipoAsientoDto {
  @ApiProperty({ description: 'ID de la cooperativa', example: 'coop123' })
  readonly cooperativa_id: string;

  @ApiProperty({ description: 'Nombre del tipo de asiento', example: 'VIP' })
  readonly nombre: string;

  @ApiProperty({ description: 'Característica especial del asiento', example: 'Reclinable', required: false })
  readonly caracter_especial?: string;

  @ApiProperty({ description: 'Descripción del tipo de asiento', example: 'Asiento con mayor espacio y comodidad', required: false })
  readonly descripcion?: string;

  @ApiProperty({ description: 'Costo adicional del tipo de asiento', example: 5.0, required: false })
  readonly costo_adicional?: number;
}
