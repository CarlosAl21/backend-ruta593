import { ApiProperty } from '@nestjs/swagger';

export class CrearMetodoPagoDto {
  @ApiProperty({ description: 'Nombre del método de pago', example: 'Tarjeta de crédito' })
  readonly nombre: string;
}
