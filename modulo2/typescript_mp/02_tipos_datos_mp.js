var edad = 30;
var nombre = 'Maria';
var activo = true;
var valor = 6;
if (edad > 18 && activo) {
    console.log('Pasajero activo con reserva');
}
else {
    console.log('Pasajero sin reserva');
}

var destinos = ['Quito', 'Guayaquil', 'Galápagos'];
for (var i = 0; i < destinos.length; i++) {
    console.log(destinos[i]);
}

var Estado;
(function (Estado) {
    Estado[Estado["Pendiente"] = 0] = "Pendiente";
    Estado[Estado["Enviado"] = 1] = "Enviado";
    Estado[Estado["Entregado"] = 2] = "Entregado";
})(Estado || (Estado = {}));

console.log(Estado);
console.log(Estado.Entregado);
