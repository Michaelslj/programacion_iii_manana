class Pasajero {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    puedeAbordar() {
        if (this.edad >= 18) {
            console.log(`${this.nombre} puede abordar`);
        } else {
            console.log(`${this.nombre} no puede abordar, es menor de edad`);
        }
    }

    mostrar() {
        console.log(this.nombre, this.edad);
    }
}

const pasajero1 = new Pasajero('Pedro', 17);
pasajero1.puedeAbordar();
pasajero1.mostrar();

const pasajero2 = new Pasajero('Ana', 25);
pasajero2.puedeAbordar();
pasajero2.mostrar();
