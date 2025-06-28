import { Type } from "class-transformer";
import { IsNumber, IsString, IsOptional, IsNotEmpty } from "class-validator";
import { IsAEcuadorianLicensePlate } from "src/common/decorators/placa.validator";
import { ApiProperty } from "@nestjs/swagger";
import { DeepPartial } from "typeorm";
import { EstructuraBus } from "src/estructura_buses/entidades/estructura_bus.entity";

export class CreateBusDto {
    @ApiProperty({
        description: 'Número identificador del bus',
        example: 1,
        type: Number
    })
    @IsNumber({}, {message: "El numero de bus debe ser un número"})
    @Type(() => Number)
    numero_bus: number;

    @ApiProperty({
        description: 'Placa del bus en formato ecuatoriano',
        example: 'ABC-1234',
        pattern: 'XXX-1234 o XXX-123'
    })
    @IsString()
    @IsAEcuadorianLicensePlate({message: "La placa debe tener formato válido (XXX-1234 o XXX-123)"})
    placa: string;

    @ApiProperty({
        description: 'Número de chasis del bus',
        example: '9BM384067AB123456'
    })
    @IsString({message: "El chasis debe ser una cadena de texto"})
    chasis: string;

    @ApiProperty({
        description: 'Marca o modelo de la carrocería',
        example: 'Mercedes-Benz'
    })
    @IsString()
    carroceria: string;

    @ApiProperty({
        description: 'Cantidad de asientos normales',
        example: 40,
        type: Number
    })
    @IsNumber({}, {message: "El total de asientos normales debe ser un número"})
    @Type(() => Number)   
    total_asientos_normales: number;

    @ApiProperty({
        description: 'Cantidad de asientos VIP',
        example: 10,
        type: Number
    })
    @IsNumber({}, {message: "El total de asientos VIP debe ser un número"})
    @Type(() => Number)
    total_asientos_vip: number;

    @ApiProperty({
        description: 'Imágenes del bus',
        type: 'array',
        items: {
            type: 'file',
            format: 'binary'
        },
        required: false
    })
    @IsOptional()
    files?: Express.Multer.File[];

    @IsNotEmpty({message: "El ID de la estructura del bus no puede estar vacío"})
    @ApiProperty({
        description: 'ID de la estructura del bus',
        example: '123e4567-e89b-12d3-a456-426614174000',
        type: String
    })
    @IsString({message: "El ID de la estructura del bus debe ser una cadena de texto"})
    id_estructura_bus: DeepPartial<EstructuraBus>;
}