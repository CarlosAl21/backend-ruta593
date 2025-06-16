import { ApiProperty } from '@nestjs/swagger';

export class CrearTerminalDto {
  @ApiProperty({ description: 'ID de la ciudad', example: 'ciudad123' })
  readonly id_ciudad: string;

  @ApiProperty({ description: 'Nombre de la terminal', example: 'Terminal Quitumbe' })
  readonly nombre: string;

  @ApiProperty({ description: 'Dirección de la terminal', example: 'Av. Mariscal Sucre y Cóndor Ñan' })
  readonly direccion: string;

  @ApiProperty({ description: 'Teléfono de la terminal', example: '022345678' })
  readonly telefono: string;

  @ApiProperty({ description: 'Hora de apertura', example: '06:00' })
  readonly hora_apertura: string;

  @ApiProperty({ description: 'Hora de cierre', example: '22:00' })
  readonly hora_cierre: string;
}
