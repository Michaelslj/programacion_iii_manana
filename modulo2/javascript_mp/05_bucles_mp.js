let preciosVuelos = [150, 200, 120, 300, 180];
let totalPrecios = 0;

for (let i = 0; i < preciosVuelos.length; i++) {
    console.log("Vuelo", i + 1, "precio:", preciosVuelos[i]);
    totalPrecios += preciosVuelos[i];
    console.log("Total acumulado:", totalPrecios);
}

for (let i = 0; i < preciosVuelos.length; i++) {
    totalPrecios += preciosVuelos[i];
}
console.log("Total final de todas las reservas:", totalPrecios);

console.log("Tabla de multiplicar de pasajeros para vuelo 1");
for (let i = 1; i <= 10; i++) {
    console.log(`Vuelo 1 con ${i} veces la cantidad de pasajeros = ${i * 5}`);
}

let pasajeros = ["Francisco", "Ana", "Luis"];
for (let i = 0; i < pasajeros.length; i++) {
    console.log("Pasajero:", pasajeros[i]);
}

for (let i = 0; i < preciosVuelos.length; i++) {
    console.log("Cuadrado del precio del vuelo", i + 1, "es", preciosVuelos[i] ** 2);
}

let i = 1;
while (i <= preciosVuelos.length) {
    console.log("Índice de vuelo:", i);
    i++;
}

let indice = 0;
while (indice < preciosVuelos.length) {
    console.log("Precio del vuelo", indice + 1, "es", preciosVuelos[indice]);
    indice++;
}

let ind = 0;
while (ind < preciosVuelos.length) {
    if (preciosVuelos[ind] % 2 === 0) {
        console.log("Vuelo con precio par:", preciosVuelos[ind]);
    }
    ind++;
}

let x = preciosVuelos.length;
do {
    console.log("Contando vuelos desde el final:", x);
    x--;
} while (x != 0);

let mult = 1;
while (mult <= 10) {
    console.log(mult, "* 5 =", mult * 5);
    mult++;
}

let vueloMasCaro = 0;
let contador = 0;
while (contador < preciosVuelos.length) {
    if (preciosVuelos[contador] > vueloMasCaro) {
        vueloMasCaro = preciosVuelos[contador];
    }
    contador++;
}
console.log("El vuelo más caro cuesta:", vueloMasCaro);
