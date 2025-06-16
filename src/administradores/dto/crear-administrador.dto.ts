import { ApiProperty } from '@nestjs/swagger';

export class CrearAdministradorDto {
  @ApiProperty({
    description: 'DNI del administrador (UUID)',
    example: 'a1b2c3d4-e5f6-7890-abcd-1234567890ab'
  })
  readonly dni: string;

  @ApiProperty({
    description: 'Nombre de usuario del administrador',
    example: 'admin123'
  })
  readonly usuario: string;

  @ApiProperty({
    description: 'Correo electrónico del administrador',
    example: 'admin@ejemplo.com'
  })
  readonly correo: string;

  @ApiProperty({
    description: 'Contraseña del administrador',
    example: 'passwordSeguro123'
  })
  readonly contrasena: string;

  @ApiProperty({
    description: 'ID del rol asignado al administrador',
    example: 1
  })
  readonly id_rol: number;
}
