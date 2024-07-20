"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Celula = void 0;
var Celula = /** @class */ (function () {
    function Celula(proxima, anterior, elemento) {
        this.proxima = proxima;
        this.anterior = anterior;
        this.elemento = elemento;
    }
    Celula.prototype.setProxima = function (proxima) {
        this.proxima = proxima;
    };
    Celula.prototype.getProxima = function () {
        return this.proxima;
    };
    Celula.prototype.setAnterior = function (anterior) {
        this.anterior = anterior;
    };
    Celula.prototype.getAnterior = function () {
        return this.anterior;
    };
    Celula.prototype.getElemento = function () {
        return this.elemento;
    };
    return Celula;
}());
exports.Celula = Celula;
