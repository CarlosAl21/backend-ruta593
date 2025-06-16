import { IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateDescuentoDto {
    @ApiProperty({ description: 'Nombre del descuento', example: 'Descuento Estudiantil' })
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Porcentaje de descuento', example: 15 })
    @IsNotEmpty()
    porcentaje: number;

    @ApiProperty({ description: 'Fecha de vencimiento del descuento', example: '2024-12-31T23:59:59Z', type: Date })
    @IsNotEmpty()
    vida_util: Date;

    @ApiProperty({ description: 'Enlace de descarga del descuento', example: 'https://ejemplo.com/descarga' })
    @IsString()
    link_descarga: string;

    @ApiProperty({ description: 'Código promocional', example: 'PROMO2024' })
    @IsString()
    @IsNotEmpty()
    codigo_promocional: string;

    @ApiProperty({ description: 'Mensaje promocional', example: '¡Aprovecha este descuento especial!' })
    @IsString()
    @IsNotEmpty()
    mensaje: string;

    @ApiProperty({ description: 'Indica si el descuento está activo', example: true })
    @IsNotEmpty()
    activo: boolean;
}
