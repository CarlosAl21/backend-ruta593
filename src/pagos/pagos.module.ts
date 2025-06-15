import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagosService } from './pagos.service';
import { PagosController } from './pagos.controller';
import { Pago } from './entidades/pago.entity';
import { MetodoPago } from '../metodos_pago/entidades/metodo_pago.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pago, MetodoPago])],
  controllers: [PagosController],
  providers: [PagosService],
  exports: [PagosService],
})
export class PagosModule {}
