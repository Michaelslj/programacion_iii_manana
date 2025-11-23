import { Usuario } from "./05_interfaces_mp";

const pasajero1: Usuario = {
    id: 12,
    nombre: 'Jose Garcia Marquez'
}

const pasajero2: Usuario = {
    id: 13,
    nombre: 'Pablo Escobar',
    correo: 'pablo@escobar.com'
}

console.log(pasajero1);
console.log(pasajero1.id);
console.log(pasajero1.nombre);
console.log(pasajero1.correo);

console.log(pasajero2);
console.log(pasajero2.id);
console.log(pasajero2.nombre);
console.log(pasajero2.correo);
