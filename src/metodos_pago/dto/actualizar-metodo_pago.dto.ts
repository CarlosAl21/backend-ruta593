import { ApiPropertyOptional } from '@nestjs/swagger';

export class ActualizarMetodoPagoDto {
  @ApiPropertyOptional({ description: 'Nombre del método de pago', example: 'Tarjeta de crédito' })
  readonly nombre?: string;
}
