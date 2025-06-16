import { ApiProperty } from '@nestjs/swagger';

export class CrearClienteCooperativaDto {
  @ApiProperty({ description: 'ID de la cooperativa', example: 'coop123' })
  readonly cooperativa_id: string;

  @ApiProperty({ description: 'DNI del cliente', example: '1234567890' })
  readonly dni_cliente: string;
}
