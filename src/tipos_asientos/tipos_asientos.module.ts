import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiposAsientosService } from './tipos_asientos.service';
import { TiposAsientosController } from './tipos_asientos.controller';
import { TipoAsiento } from './entidades/tipo_asiento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoAsiento])],
  controllers: [TiposAsientosController],
  providers: [TiposAsientosService],
  exports: [TiposAsientosService],
})
export class TiposAsientosModule {}
