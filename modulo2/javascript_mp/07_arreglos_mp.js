console.log("ARRAYS O ARREGLOS");

let vuelos = [
    {numero: 1, precio: 150, asientos: 20},
    {numero: 2, precio: 200, asientos: 15},
    {numero: 3, precio: 120, asientos: 10},
    {numero: 4, precio: 300, asientos: 0}
];

let arrayVacio = new Array();
let arrayVacio2 = [];
console.log(arrayVacio);
console.log(arrayVacio2);

console.log("Acceso a los elementos del array");
console.log(vuelos[0]);
console.log(vuelos[3]);

console.log("Modificar elemento del array");
vuelos[0].precio = 180;
console.log(vuelos);

console.log("Agregar elemento al array");
vuelos.push({numero: 5, precio: 180, asientos: 5});
console.log(vuelos);

console.log("Agregar elemento al inicio del array");
vuelos.unshift({numero: 0, precio: 100, asientos: 50});
console.log(vuelos);

console.log("Eliminar el ultimo elemento del array");
vuelos.pop();
console.log(vuelos);

console.log("Eliminar el primer elemento del array");
vuelos.shift();
console.log(vuelos);

console.log("Iteracion del array");
let indice = 0;
console.log("Iteracion con While");
while (indice < vuelos.length) {
    console.log("Vuelo", vuelos[indice].numero, "- Precio:", vuelos[indice].precio, "- Asientos:", vuelos[indice].asientos);
    indice++;
}

console.log("Iteracion con For");
for (let i = 0; i < vuelos.length; i++) {
    console.log(vuelos[i]);
}

console.log("Iteracion con For .. of");
for (let vuelo of vuelos) {
    console.log(vuelo);
}

console.log("Iteracion con For Each");
vuelos.forEach(function(vuelo, indice){
    console.log(indice, vuelo);
});
