import { IsString, IsUUID, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFacturaDto {
  @ApiProperty({
    description: 'ID de la reserva asociada a la factura',
    example: 1
  })

  @IsString()
  @IsNotEmpty()
  reservaId: string;

  @ApiProperty({
    description: 'ID del usuario al que se emite la factura',
    example: 1
  })

  @IsString()
  @IsNotEmpty()
  usuarioId: string;
  
  @ApiProperty({
    description: 'ID de la cooperativa que emite la factura',
    example: 1,
    default: 1,
    required: false
  })

  @IsString()
  @IsOptional()
  cooperativaId?: string;

  @ApiProperty({
    description: 'ID del boleto asociado a la factura',
    example: 1
  })
  
  @IsString()
  @IsNotEmpty()
  boleto_id: string;
}
