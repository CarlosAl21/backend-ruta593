import { ApiProperty } from '@nestjs/swagger';

export class CrearPagoDto {
  @ApiProperty({ description: 'ID del boleto', example: 'boleto123' })
  readonly id_boleto: string;

  @ApiProperty({ description: 'ID del método de pago', example: 'metodo123' })
  readonly id_metodo_pago: string;

  @ApiProperty({ description: 'Fecha del pago', example: '2024-06-01T12:00:00Z', type: Date })
  readonly fecha_pago: Date;

  @ApiProperty({ description: 'Comprobante de pago', example: 'comprobante123', required: false })
  readonly comprobante?: string;

  @ApiProperty({ description: 'Estado del pago', example: 'pagado' })
  readonly estado: string;

  @ApiProperty({ description: 'ID de la cooperativa', example: 'coop123' })
  readonly id_cooperativa: string;
}
