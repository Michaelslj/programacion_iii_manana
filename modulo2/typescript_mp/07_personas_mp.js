"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, activo) {
        if (activo === void 0) { activo = true; }
        this.nombre = nombre;
        this.edad = edad;
        this.activo = activo;
    }
    Persona.prototype.mayorEdad = function () {
        if (this.edad >= 18) {
            console.log("".concat(this.nombre, " es mayor de edad"));
        }
        else {
            console.log("".concat(this.nombre, " es menor de edad"));
        }
    };
    Persona.prototype.mostrarEstado = function () {
        if (this.activo) {
            console.log("".concat(this.nombre, " est\u00E1 activo en el sistema"));
        }
        else {
            console.log("".concat(this.nombre, " no est\u00E1 activo"));
        }
    };
    return Persona;
}());
exports.Persona = Persona;
