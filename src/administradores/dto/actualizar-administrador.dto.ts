import { ApiPropertyOptional } from '@nestjs/swagger';

export class ActualizarAdministradorDto {
  @ApiPropertyOptional({ description: 'Nombre de usuario del administrador', example: 'admin123' })
  readonly usuario?: string;

  @ApiPropertyOptional({ description: 'Correo electrónico del administrador', example: 'admin@example.com' })
  readonly correo?: string;

  @ApiPropertyOptional({ description: 'Contraseña del administrador', example: 'password123' })
  readonly contrasena?: string;

  @ApiPropertyOptional({ description: 'ID del rol asignado al administrador', example: 2 })
  readonly id_rol?: number;
}