import { Module } from '@nestjs/common';
import { BoletosService } from './boletos.service';
import { BoletosController } from './boletos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Boleto } from './entities/boleto.entity';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { Reserva } from '../reserva/entities/reserva.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Boleto, Reserva]),
    CloudinaryModule
  ],
  controllers: [BoletosController],
  providers: [BoletosService],
})
export class BoletosModule {}
