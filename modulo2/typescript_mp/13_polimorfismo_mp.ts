import { Vuelo } from "./11_herencia_mp";

export class VueloCarga extends Vuelo {
    getCapacidadCarga(): void {
        console.log('Vuelo de carga pesada');
    }
}

const miVueloCarga = new VueloCarga('Quito', 'Guayaquil'); 
console.log(miVueloCarga.origen);
console.log(miVueloCarga.destino);
miVueloCarga.moverse();
miVueloCarga.getCapacidadCarga();
