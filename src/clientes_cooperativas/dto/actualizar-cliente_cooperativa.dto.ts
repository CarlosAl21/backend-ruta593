import { ApiPropertyOptional } from '@nestjs/swagger';

export class ActualizarClienteCooperativaDto {
  @ApiPropertyOptional({ description: 'ID de la cooperativa', example: 'coop123' })
  readonly cooperativa_id?: string;

  @ApiPropertyOptional({ description: 'DNI del cliente', example: '1234567890' })
  readonly dni_cliente?: string;
}
