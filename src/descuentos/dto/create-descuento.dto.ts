import { IsNotEmpty, IsString } from "class-validator";

export class CreateDescuentoDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    porcentaje: number;

    @IsNotEmpty()
    vida_util: Date;

    @IsString()
    link_descarga: string;

    @IsString()
    @IsNotEmpty()
    codigo_promocional: string;

    @IsString()
    @IsNotEmpty()
    mensaje: string;

    @IsNotEmpty()
    activo: boolean;
}
