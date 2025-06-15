export enum EstadoReserva {
    PENDIENTE = 'pendiente',
    CONFIRMADA = 'confirmada',
    CANCELADA = 'cancelada',
    FINALIZADA = 'FINALIZADA',
}

export enum MetodoPago {
    PRESENCIAL = 'presencial',
    PAYPAL = 'paypal',
    DEPOSITO = 'deposito', //Deposito bancario tambien hace referencia a una transferencia bancaria
}