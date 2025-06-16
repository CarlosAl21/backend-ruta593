import { ApiProperty } from '@nestjs/swagger';

export class CrearClienteDto {
  @ApiProperty({ description: 'DNI del cliente', example: '1234567890' })
  readonly dni: string;

  @ApiProperty({ description: 'Nombre del cliente', example: 'Juan' })
  readonly nombre: string;

  @ApiProperty({ description: 'Apellido del cliente', example: 'Pérez' })
  readonly apellido: string;

  @ApiProperty({ description: 'Dirección del cliente', example: 'Av. Siempre Viva 123' })
  readonly direccion: string;

  @ApiProperty({ description: 'Teléfono del cliente', example: '0999999999' })
  readonly telefono: string;

  @ApiProperty({ description: 'Correo electrónico del cliente', example: 'juan.perez@email.com' })
  readonly correo: string;
}
