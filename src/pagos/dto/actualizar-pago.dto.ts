import { ApiPropertyOptional } from '@nestjs/swagger';

export class ActualizarPagoDto {
  @ApiPropertyOptional({ description: 'ID del boleto', example: 'boleto123' })
  readonly id_boleto?: string;

  @ApiPropertyOptional({ description: 'ID del método de pago', example: 'metodo123' })
  readonly id_metodo_pago?: string;

  @ApiPropertyOptional({ description: 'Fecha del pago', example: '2024-06-01T12:00:00Z', type: Date })
  readonly fecha_pago?: Date;

  @ApiPropertyOptional({ description: 'Comprobante de pago', example: 'comprobante123' })
  readonly comprobante?: string;

  @ApiPropertyOptional({ description: 'Estado del pago', example: 'pagado' })
  readonly estado?: string;

  @ApiPropertyOptional({ description: 'ID de la cooperativa', example: 'coop123' })
  readonly id_cooperativa?: string;
}
