console.log("OBJETOS");

let vuelo = {
    numero: 1,
    origen: "Quito",
    destino: "Guayaquil",
    precio: 150
};

console.log(vuelo);
console.log(vuelo.numero);
console.log(vuelo.destino);
console.log(vuelo["precio"]);

console.log("Modificacion del objeto");
vuelo.destino = "Cuenca";
console.log(vuelo);
vuelo.asientos = 20;
console.log(vuelo);

console.log("Eliminar clave del objeto");
delete vuelo.asientos;
console.log(vuelo);

console.log("Recorrer un objeto");
for (let clave in vuelo) {
    console.log(clave);
}

console.log("Mostrar claves con Object.keys");
console.log(Object.keys(vuelo));

console.log("Mostrar valores con Object.values");
console.log(Object.values(vuelo));

console.log("Objetos Anidados");

let reserva = {
    pasajero: "Pedro Perez",
    vuelo: {
        numero: 2,
        origen: "Quito",
        destino: "Guayaquil",
        precio: 200
    },
    contacto: {
        correo: "pedro@gmail.com",
        telefono: "0251456",
        celular: "0943568456"
    },
    asientosReservados: [
        { asiento: "1A", clase: "Ejecutiva" },
        { asiento: "1B", clase: "Ejecutiva" }
    ]
};

console.log("Reserva", reserva);
