import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstacionCooperativaService } from './estacion_cooperativa.service';
import { EstacionCooperativaController } from './estacion_cooperativa.controller';
import { EstacionCooperativa } from './entidades/estacion_cooperativa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstacionCooperativa])],
  controllers: [EstacionCooperativaController],
  providers: [EstacionCooperativaService],
  exports: [EstacionCooperativaService],
})
export class EstacionCooperativaModule {}
