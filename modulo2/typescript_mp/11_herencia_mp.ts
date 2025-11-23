export class Vuelo {
    public origen: string;
    public destino: string;

    constructor(origen: string, destino: string) {
        this.origen = origen;
        this.destino = destino;
    }

    moverse(): void {
        console.log(`Vuelo de ${this.origen} a ${this.destino} en movimiento`);
    }
}

export class VueloEspecial extends Vuelo {}
