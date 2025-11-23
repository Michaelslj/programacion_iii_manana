export class Persona {
    nombre: string;
    edad: number;
    activo: boolean;

    constructor(nombre: string, edad: number, activo: boolean = true) {
        this.nombre = nombre;
        this.edad = edad;
        this.activo = activo;
    }

    mayorEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} es mayor de edad`);
        } else {
            console.log(`${this.nombre} es menor de edad`);
        }
    }

    mostrarEstado(): void {
        if (this.activo) {
            console.log(`${this.nombre} está activo en el sistema`);
        } else {
            console.log(`${this.nombre} no está activo`);
        }
    }
}
