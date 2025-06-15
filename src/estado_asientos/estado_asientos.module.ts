import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoAsientosService } from './estado_asientos.service';
import { EstadoAsientosController } from './estado_asientos.controller';
import { EstadoAsiento } from './entidades/estado_asiento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoAsiento])],
  controllers: [EstadoAsientosController],
  providers: [EstadoAsientosService],
  exports: [EstadoAsientosService],
})
export class EstadoAsientosModule {}
