function saludarPasajero(nombre?: string): string {
    return `Hola ${nombre}, bienvenido a FlyFast`;
}

console.log(saludarPasajero('Francisco'));

const sumarAsientos = (asientos1: number, asientos2: number): number => {
    return asientos1 + asientos2;
}
console.log(sumarAsientos(3, 2));

function mensajeBienvenida(): void {
    console.log("Hola");
    console.log("Bienvenido a FlyFast");
}
mensajeBienvenida();

function calcularDistanciaVuelo(km: number): number {
    return Math.PI * km * km; // ejemplo sencillo de cálculo
}

function mostrarDistanciaVuelo(km: number): void {
    console.log("Distancia estimada (km):", Math.PI + km * km);
}

console.log(calcularDistanciaVuelo(5));
mostrarDistanciaVuelo(7);
