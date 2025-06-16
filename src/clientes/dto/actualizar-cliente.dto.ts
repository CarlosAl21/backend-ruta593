import { ApiPropertyOptional } from '@nestjs/swagger';

export class ActualizarClienteDto {
  @ApiPropertyOptional({ description: 'Nombre del cliente', example: 'Juan' })
  readonly nombre?: string;

  @ApiPropertyOptional({ description: 'Apellido del cliente', example: 'Pérez' })
  readonly apellido?: string;

  @ApiPropertyOptional({ description: 'Dirección del cliente', example: 'Av. Siempre Viva 123' })
  readonly direccion?: string;

  @ApiPropertyOptional({ description: 'Teléfono del cliente', example: '0999999999' })
  readonly telefono?: string;

  @ApiPropertyOptional({ description: 'Correo electrónico del cliente', example: 'juan.perez@email.com' })
  readonly correo?: string;
}
