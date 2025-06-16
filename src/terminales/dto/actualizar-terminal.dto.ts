import { ApiPropertyOptional } from '@nestjs/swagger';

export class ActualizarTerminalDto {
  @ApiPropertyOptional({ description: 'ID de la ciudad', example: 'ciudad123' })
  readonly id_ciudad?: string;

  @ApiPropertyOptional({ description: 'Nombre de la terminal', example: 'Terminal Quitumbe' })
  readonly nombre?: string;

  @ApiPropertyOptional({ description: 'Dirección de la terminal', example: 'Av. Mariscal Sucre y Cóndor Ñan' })
  readonly direccion?: string;

  @ApiPropertyOptional({ description: 'Teléfono de la terminal', example: '022345678' })
  readonly telefono?: string;

  @ApiPropertyOptional({ description: 'Hora de apertura', example: '06:00' })
  readonly hora_apertura?: string;

  @ApiPropertyOptional({ description: 'Hora de cierre', example: '22:00' })
  readonly hora_cierre?: string;
}
