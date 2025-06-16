import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateRoleDto {
  @ApiPropertyOptional({ description: 'Nombre del rol', example: 'Administrador' })
  readonly name?: string;

  @ApiPropertyOptional({ description: 'Descripción del rol', example: 'Rol con acceso total', required: false })
  readonly description?: string;
}
