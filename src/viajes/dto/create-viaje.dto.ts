import { IsDate, IsNotEmpty, IsNumber } from "class-validator";
import { Frecuencia } from "src/frecuencias/entities/frecuencia.entity";
import { DeepPartial } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

export class CreateViajeDto {
    @ApiProperty({
        description: 'Fecha de salida del viaje',
        type: String,
        example: '2025-06-05T08:00:00.000Z',
    })
    @IsDate()
    @IsNotEmpty()
    fecha_salida: Date;

    @ApiProperty({
        description: 'Número de asientos disponibles',
        example: 30,
    })
    @IsNotEmpty()
    @IsNumber()
    num_asientos_disponibles: number;

    @ApiProperty({
        description: 'Número de asientos ocupados',
        example: 10,
    })
    @IsNotEmpty()
    @IsNumber()
    num_asientos_ocupados: number;

    @ApiProperty({
        description: 'Frecuencia asociada al viaje',
        type: () => Object,
        example: { frecuencia_id: 1 }
    })
    @IsNotEmpty()
    id_frecuencia: DeepPartial<Frecuencia>;
}
