import { ApiProperty } from '@nestjs/swagger';

export class CrearSerialEstacionDto {
  @ApiProperty({ description: 'ID de la estación', example: 'estacion123' })
  readonly id_estacion: string;

  @ApiProperty({ description: 'ID del usuario', example: 'usuario123' })
  readonly id_usuario: string;

  @ApiProperty({ description: 'Número de serie', example: 'SN-001-2024' })
  readonly numero_serie: string;

  @ApiProperty({ description: 'Estado del serial', example: 'activo' })
  readonly estado: string;
}
