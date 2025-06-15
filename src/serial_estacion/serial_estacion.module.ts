import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SerialEstacionService } from './serial_estacion.service';
import { SerialEstacionController } from './serial_estacion.controller';
import { SerialEstacion } from './entidades/serial_estacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SerialEstacion])],
  controllers: [SerialEstacionController],
  providers: [SerialEstacionService],
  exports: [SerialEstacionService],
})
export class SerialEstacionModule {}
