let edad: number = 30;
let nombre: string = 'Maria';
let activo: boolean = true;
let valor: any = 6;

if (edad > 18 && activo) {
    console.log('Pasajero con reserva activa');
} else {
    console.log('Pasajero sin reserva');
}

let destinos: string[] = ['Quito', 'Guayaquil', 'Galápagos'];
for (let i = 0; i < destinos.length; i++) {
    console.log(destinos[i]);
}

enum EstadoVuelo {
    Pendiente,
    Enviado,
    Entregado
}

console.log(EstadoVuelo);
console.log('Estado del vuelo:', EstadoVuelo.Entregado);
