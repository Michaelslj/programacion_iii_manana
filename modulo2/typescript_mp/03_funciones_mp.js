function saludarPasajero(nombre: string) {
    return `Hola ${nombre}, bienvenido a FlyFast`;
}
console.log(saludarPasajero('Francisco'));

const sumarAsientos = (asientos1: number, asientos2: number) => {
    return asientos1 + asientos2;
};
console.log(sumarAsientos(3, 2));

function mensajeBienvenida() {
    console.log("Bienvenido a FlyFast");
    console.log("Gracias por elegirnos para tu viaje");
}
mensajeBienvenida();

function calcularDistanciaKm(latitud1: number, latitud2: number, longitud1: number, longitud2: number) {
    // Distancia aproximada simple
    return Math.sqrt(Math.pow(latitud2 - latitud1, 2) + Math.pow(longitud2 - longitud1, 2));
}

function mostrarDistanciaKm(latitud1: number, latitud2: number, longitud1: number, longitud2: number) {
    console.log("Distancia estimada (km):", calcularDistanciaKm(latitud1, latitud2, longitud1, longitud2));
}

console.log(calcularDistanciaKm(0, 1, 0, 1));
mostrarDistanciaKm(0, 1, 0, 1);
