class Vuelo {
    constructor(origen, destino){
        this.origen = origen;
        this.destino = destino;
    }

    despegar(){
        console.log(`Vuelo de ${this.origen} a ${this.destino} está despegando`);
    }

    volar(){
        console.log(`Vuelo de ${this.origen} a ${this.destino} está en el aire`);
    }

    aterrizar(){
        console.log(`Vuelo de ${this.origen} a ${this.destino} ha aterrizado`);
    }
}

const miVuelo = new Vuelo('Quito', 'Guayaquil');
miVuelo.despegar();
miVuelo.volar();
miVuelo.aterrizar();
console.log(miVuelo.origen);
console.log(miVuelo.destino);
