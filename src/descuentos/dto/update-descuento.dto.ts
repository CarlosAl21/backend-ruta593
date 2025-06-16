import { PartialType } from '@nestjs/swagger';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateDescuentoDto } from './create-descuento.dto';

export class UpdateDescuentoDto extends PartialType(CreateDescuentoDto) {
  @ApiPropertyOptional({ description: 'Nombre del descuento', example: 'Descuento Estudiantil' })
  nombre?: string;

  @ApiPropertyOptional({ description: 'Porcentaje de descuento', example: 15 })
  porcentaje?: number;

  @ApiPropertyOptional({ description: 'Fecha de vencimiento del descuento', example: '2024-12-31T23:59:59Z', type: Date })
  vida_util?: Date;

  @ApiPropertyOptional({ description: 'Enlace de descarga del descuento', example: 'https://ejemplo.com/descarga' })
  link_descarga?: string;

  @ApiPropertyOptional({ description: 'Código promocional', example: 'PROMO2024' })
  codigo_promocional?: string;

  @ApiPropertyOptional({ description: 'Mensaje promocional', example: '¡Aprovecha este descuento especial!' })
  mensaje?: string;

  @ApiPropertyOptional({ description: 'Indica si el descuento está activo', example: true })
  activo?: boolean;
}
