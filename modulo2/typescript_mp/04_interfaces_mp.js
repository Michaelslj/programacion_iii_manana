var pasajero1 = {
    id: 12,
    nombre: 'Jose Garcia Marquez'
};

var pasajero2 = {
    id: 13,
    nombre: 'Pablo Escobar',
    correo: 'pablo@escobar.com'
};

console.log(pasajero1);
console.log(pasajero1.id);
console.log(pasajero1.nombre);
console.log((pasajero1 as any).correo); // pasajero1 no tiene correo

console.log(pasajero2);
console.log(pasajero2.id);
console.log(pasajero2.nombre);
console.log(pasajero2.correo);
