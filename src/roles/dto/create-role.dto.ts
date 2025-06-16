import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ description: 'Nombre del rol', example: 'Administrador' })
  readonly name: string;

  @ApiProperty({ description: 'Descripción del rol', example: 'Rol con acceso total', required: false })
  readonly description?: string;
}
