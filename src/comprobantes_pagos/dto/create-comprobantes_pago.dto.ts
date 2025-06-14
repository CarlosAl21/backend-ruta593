import { DeepPartial } from 'typeorm';
import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EstadoComprobante } from "src/common/enums/comprobantes.enum";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";

export class CreateComprobantesPagoDto {
    @ApiProperty({ description: 'UID del boleto asociado al comprobante', example: 'uuid-string' })
    @IsString()
    boleto_id: string;

    @ApiProperty({ description: 'UID del usuario que realiza el pago', example: 'uuid-string' })
    @IsString()
    usuario_id: string;

    @ApiProperty({
        description: 'URL de la imagen del comprobante de pago',
        example: 'https://storage.googleapis.com/comprobantes/imagen.jpg',
        required: false
    })
    @IsString()
    @IsOptional()
    url_comprobante?: string;

    @ApiProperty({
        description: 'Estado del comprobante de pago',
        enum: EstadoComprobante,
        default: EstadoComprobante.PENDIENTE,
        example: EstadoComprobante.PENDIENTE,
        required: false
    })
    @IsEnum(EstadoComprobante)
    @IsOptional()
    estado?: EstadoComprobante = EstadoComprobante.PENDIENTE;

    @ApiProperty({
        description: 'Comentarios adicionales sobre el comprobante',
        example: 'Pago realizado mediante transferencia bancaria',
        required: false
    })
    @IsString()
    @IsOptional()   
    comentarios?: string;    
}
