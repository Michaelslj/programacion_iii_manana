"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vuelo = void 0;
var Vuelo = /** @class */ (function () {
    function Vuelo(origen) {
        this.idGeneric = 'FLY991828982988';
        this.origen = origen;
        this.generarCodigo();
    }
    Vuelo.prototype.generarCodigo = function () {
        this.codigoInterno = "".concat(this.origen.substring(0, 3).toUpperCase(), "-").concat((new Date()).toDateString());
    };
    Vuelo.prototype.getCodigo = function () {
        return this.codigoInterno;
    };
    Vuelo.prototype.getAtributes = function () {
        return {
            origen: this.origen,
            codigo: this.codigoInterno,
            id: this.idGeneric
        };
    };
    return Vuelo;
}());
exports.Vuelo = Vuelo;
