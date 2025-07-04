import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { EstadoBoleto } from "src/common/enums/boletos.enum";
import { ApiProperty } from "@nestjs/swagger";

export class CreateBoletoDto {
    @ApiProperty({
        description: 'Total a pagar por el boleto',
        example: 25.50,
    })
    @IsNumber()
    total: number;

    @ApiProperty({
        description: 'Cantidad de asientos reservados',
        example: 2,
    })
    @IsNumber()
    cantidad_asientos: number;

    @ApiProperty({
        description: 'Estado del boleto',
        enum: EstadoBoleto,
        example: EstadoBoleto.PAGADO,
        default: EstadoBoleto.PAGADO,
        required: false
    })
    @IsOptional()
    @IsEnum(EstadoBoleto)
    estado?: EstadoBoleto;

    @ApiProperty({
        description: 'URL de la imagen del código QR del boleto',
        example: 'https://storage.googleapis.com/boletos/qr-123.png',
    })
    @IsString()
    url_imagen_qr: string;

    @ApiProperty({
        description: 'Números de asientos reservados (separados por comas)',
        example: '15,16',
    })
    @IsString()
    asientos: string;
}
