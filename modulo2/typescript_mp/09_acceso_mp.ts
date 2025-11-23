export class Vuelo {
    public origen: string; 
    private codigoInterno: any; 
    protected idGeneric: string = 'FLY991828982988'; 

    constructor(origen: string) {
        this.origen = origen;
        this.generarCodigo();
    }

    generarCodigo(): void {
        this.codigoInterno = `${this.origen.substring(0,3).toUpperCase()}-${(new Date()).toDateString()}`;
    }

    getCodigo(): any {
        return this.codigoInterno;
    }

    getAtributes(): any {
        return {
            origen: this.origen,
            codigo: this.codigoInterno,
            id: this.idGeneric
        };
    }
}
