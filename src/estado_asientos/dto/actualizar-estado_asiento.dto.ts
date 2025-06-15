export class ActualizarEstadoAsientoDto {
  readonly id_asiento?: number;
  readonly id_frecuencia?: number;
  readonly estado?: string;
  readonly fecha_reserva?: Date;
  readonly dni_cliente?: string;
}
