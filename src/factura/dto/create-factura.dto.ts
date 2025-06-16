import { IsString, IsUUID, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFacturaDto {
  @ApiProperty({
    description: 'ID de la reserva asociada a la factura',
    example: 'b6e8c8a2-1234-4f8e-9a2b-123456789abc',
    type: 'string',
    format: 'uuid'
  })
  @IsString()
  @IsNotEmpty()
  reservaId: string;

  @ApiProperty({
    description: 'ID del usuario al que se emite la factura',
    example: 'a1b2c3d4-5678-4e9f-8a2b-abcdef123456',
    type: 'string',
    format: 'uuid'
  })
  @IsString()
  @IsNotEmpty()
  usuarioId: string;
  
  @ApiProperty({
    description: 'ID de la cooperativa que emite la factura',
    example: 'c0ffee12-3456-7890-abcd-1234567890ab',
    default: 'c0ffee12-3456-7890-abcd-1234567890ab',
    required: false,
    type: 'string',
    format: 'uuid'
  })
  @IsString()
  @IsOptional()
  cooperativaId?: string;

  @ApiProperty({
    description: 'ID del boleto asociado a la factura',
    example: 'f1e2d3c4-5678-4a9b-8c2d-abcdef654321',
    type: 'string',
    format: 'uuid'
  })
  @IsString()
  @IsNotEmpty()
  boleto_id: string;
}
