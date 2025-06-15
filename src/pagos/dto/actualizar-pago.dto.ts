export class ActualizarPagoDto {
  readonly id_boleto?: string;
  readonly id_metodo_pago?: string;
  readonly fecha_pago?: Date;
  readonly comprobante?: string;
  readonly estado?: string;
  readonly id_cooperativa?: string;
}
