"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaDuplamenteLigada = void 0;
var Celula_1 = require("./Celula");
var ListaDuplamenteLigada = /** @class */ (function () {
    function ListaDuplamenteLigada() {
        this.primeira = null;
        this.ultima = null;
        this.totalDeElementos = 0;
    }
    ListaDuplamenteLigada.prototype.adicionaNoComeco = function (elemento) {
        var nova = new Celula_1.Celula(this.primeira, null, elemento);
        if (this.primeira !== null) {
            this.primeira.setAnterior(nova);
        }
        this.primeira = nova;
        if (this.totalDeElementos === 0) {
            this.ultima = this.primeira;
        }
        this.totalDeElementos++;
    };
    ListaDuplamenteLigada.prototype.adicionar = function (elemento) {
        if (this.totalDeElementos === 0) {
            this.adicionaNoComeco(elemento);
        }
        else {
            var nova = new Celula_1.Celula(null, this.ultima, elemento);
            if (this.ultima !== null) {
                this.ultima.setProxima(nova);
            }
            this.ultima = nova;
            this.totalDeElementos++;
        }
    };
    ListaDuplamenteLigada.prototype.adiciona = function (posicao, elemento) {
        if (posicao === 0) {
            this.adicionaNoComeco(elemento);
        }
        else if (posicao === this.totalDeElementos) {
            this.adicionar(elemento);
        }
        else {
            var anterior = this.pegaCelula(posicao - 1);
            var proxima = anterior.getProxima();
            var nova = new Celula_1.Celula(proxima, anterior, elemento);
            anterior.setProxima(nova);
            if (proxima !== null) {
                proxima.setAnterior(nova);
            }
            this.totalDeElementos++;
        }
    };
    ListaDuplamenteLigada.prototype.pega = function (posicao) {
        return this.pegaCelula(posicao).getElemento();
    };
    ListaDuplamenteLigada.prototype.pegaCelula = function (posicao) {
        if (!this.posicaoOcupada(posicao)) {
            throw new Error("Posição não existe");
        }
        var atual = this.primeira;
        for (var i = 0; i < posicao; i++) {
            atual = atual.getProxima();
        }
        return atual;
    };
    ListaDuplamenteLigada.prototype.posicaoOcupada = function (posicao) {
        return posicao >= 0 && posicao < this.totalDeElementos;
    };
    ListaDuplamenteLigada.prototype.removeDoComeco = function () {
        if (!this.posicaoOcupada(0)) {
            throw new Error("Posição não existe");
        }
        this.primeira = this.primeira.getProxima();
        if (this.primeira !== null) {
            this.primeira.setAnterior(null);
        }
        else {
            this.ultima = null;
        }
        this.totalDeElementos--;
    };
    ListaDuplamenteLigada.prototype.removeDoFim = function () {
        if (!this.posicaoOcupada(this.totalDeElementos - 1)) {
            throw new Error("Posição não existe");
        }
        if (this.totalDeElementos === 1) {
            this.removeDoComeco();
        }
        else {
            this.ultima = this.ultima.getAnterior();
            this.ultima.setProxima(null);
            this.totalDeElementos--;
        }
    };
    ListaDuplamenteLigada.prototype.remove = function (posicao) {
        if (!this.posicaoOcupada(posicao)) {
            throw new Error("Posição não existe");
        }
        if (posicao === 0) {
            this.removeDoComeco();
        }
        else if (posicao === this.totalDeElementos - 1) {
            this.removeDoFim();
        }
        else {
            var anterior = this.pegaCelula(posicao - 1);
            var atual = anterior.getProxima();
            var proxima = atual.getProxima();
            anterior.setProxima(proxima);
            if (proxima !== null) {
                proxima.setAnterior(anterior);
            }
            this.totalDeElementos--;
        }
    };
    ListaDuplamenteLigada.prototype.contem = function (elemento) {
        var atual = this.primeira;
        while (atual !== null) {
            if (JSON.stringify(atual.getElemento()) === JSON.stringify(elemento)) {
                return true;
            }
            atual = atual.getProxima();
        }
        return false;
    };
    ListaDuplamenteLigada.prototype.tamanho = function () {
        return this.totalDeElementos;
    };
    ListaDuplamenteLigada.prototype.toString = function () {
        if (this.totalDeElementos === 0) {
            return "[]";
        }
        var str = "[";
        var atual = this.primeira;
        for (var i = 0; i < this.totalDeElementos - 1; i++) {
            str += atual.getElemento();
            str += ", ";
            atual = atual.getProxima();
        }
        str += atual.getElemento();
        str += "]";
        return str;
    };
    ListaDuplamenteLigada.prototype.getCelula = function (posicao) {
        return this.pegaCelula(posicao);
    };
    return ListaDuplamenteLigada;
}());
exports.ListaDuplamenteLigada = ListaDuplamenteLigada;
