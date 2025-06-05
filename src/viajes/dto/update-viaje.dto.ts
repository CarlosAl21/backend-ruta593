import { PartialType, ApiProperty } from '@nestjs/swagger';
import { CreateViajeDto } from './create-viaje.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateViajeDto extends PartialType(CreateViajeDto) {
    @ApiProperty({
        description: 'ID del viaje',
        example: '1',
    })
    @IsNotEmpty()
    @IsString()
    id_viaje: string;
}
