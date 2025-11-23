console.log("FUNCIONES FLYFAST");

function saludarVuelo() {
    console.log("Bienvenido a FlyFast, tu sistema de reservas de vuelos");
}
saludarVuelo();

function sumarPrecios(precio1, precio2) {
    return precio1 + precio2;
}
let precioTotal = sumarPrecios(150, 200);
console.log("Suma de dos vuelos:", precioTotal);

const restarAsientos = (asientosTotales, asientosReservados) => {
    return asientosTotales - asientosReservados;
}
let asientosLibres = restarAsientos(50, 12);
console.log("Asientos libres después de la reserva:", asientosLibres);

const cuadradoPrecio = precio => precio * precio;
console.log("Cuadrado del precio de un vuelo:", cuadradoPrecio(180));

function saludaPasajero(nombre, saludo = "Bienvenido") {
    return saludo + " " + nombre;
}
let saludo1 = saludaPasajero("Francisco");
let saludo2 = saludaPasajero("Ana", "Buenos días");
console.log(saludo1);
console.log(saludo2);

function numeroVueloParImpar(numeroVuelo) {
    if (numeroVuelo % 2 == 0) {
        return "par";
    } else {
        return "impar";
    }
}
console.log("Vuelo 4 es", numeroVueloParImpar(4));
console.log("Vuelo 7 es", numeroVueloParImpar(7));

function areaCabina(base, altura) {
    return (base * altura) / 2;
}
console.log("Área de cabina triangular:", areaCabina(10, 5));

let vuelos = [
    {numero: 1, precio: 150, asientos: 20},
    {numero: 2, precio: 200, asientos: 15},
    {numero: 3, precio: 120, asientos: 10},
    {numero: 4, precio: 300, asientos: 0},
    {numero: 5, precio: 180, asientos: 5}
];

function mostrarVuelos(vuelos) {
    for (let i = 0; i < vuelos.length; i++) {
        console.log(`Vuelo ${vuelos[i].numero} - Precio: ${vuelos[i].precio} - Asientos disponibles: ${vuelos[i].asientos}`);
    }
}
mostrarVuelos(vuelos);

function vueloMasCaro(vuelos) {
    let caro = 0;
    let vueloNumero = 0;
    for (let i = 0; i < vuelos.length; i++) {
        if (vuelos[i].precio > caro) {
            caro = vuelos[i].precio;
            vueloNumero = vuelos[i].numero;
        }
    }
    return `El vuelo más caro es el vuelo ${vueloNumero} con precio ${caro}`;
}
console.log(vueloMasCaro(vuelos));

function totalPreciosVuelos(vuelos) {
    let total = 0;
    for (let i = 0; i < vuelos.length; i++) {
        total += vuelos[i].precio;
    }
    return total;
}
console.log("Total de precios de todos los vuelos:", totalPreciosVuelos(vuelos));

function vuelosPrecioPar(vuelos) {
    let contador = 0;
    for (let i = 0; i < vuelos.length; i++) {
        if (vuelos[i].precio % 2 === 0) {
            contador++;
        }
    }
    return contador;
}
console.log("Cantidad de vuelos con precio par:", vuelosPrecioPar(vuelos));
