class Vuelo {
    constructor(origen, destino) {
        this.origen = origen;
        this.destino = destino;
    }

    moverse() {
        console.log("Vuelo en movimiento");
    }
}

class VueloEspecial extends Vuelo {}

const miVueloEspecial = new VueloEspecial("Quito", "Guayaquil");
const miVueloNormal = new Vuelo("Quito", "Galápagos");

miVueloEspecial.moverse();
miVueloNormal.moverse();
