import { Module } from '@nestjs/common';
import { ViajesService } from './viajes.service';
import { ViajesController } from './viajes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Viaje } from './entities/viaje.entity';
import { Ruta } from 'src/rutas/entities/ruta.entity';
import { Frecuencia } from 'src/frecuencias/entities/frecuencia.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Viaje, Ruta, Frecuencia]),
  ],
  controllers: [ViajesController],
  providers: [ViajesService],
  exports: [ViajesService],
})
export class ViajesModule {}
