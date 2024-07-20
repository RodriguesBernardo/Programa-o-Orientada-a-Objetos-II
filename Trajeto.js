"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trajeto = void 0;
var Trajeto = /** @class */ (function () {
    function Trajeto(local, distancia, tempo) {
        this.local = local;
        this.distacia = distancia;
        this.tempo = tempo;
    }
    Trajeto.prototype.getLocal = function () {
        return this.local;
    };
    Trajeto.prototype.getDistancia = function () {
        return this.distacia;
    };
    Trajeto.prototype.getTempo = function () {
        return this.tempo;
    };
    Trajeto.prototype.toString = function () {
        console.log("Distancia: ", this.distacia);
        console.log("Local: ", this.local);
        console.log("Tempo: ", this.tempo);
    };
    return Trajeto;
}());
exports.Trajeto = Trajeto;
