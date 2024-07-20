"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navegador = void 0;
var ListaDuplamenteLigada_1 = require("./ListaDuplamenteLigada");
var Navegador = /** @class */ (function () {
    function Navegador() {
        this.historico = new ListaDuplamenteLigada_1.ListaDuplamenteLigada();
        this.posicaoAtual = -1;
    }
    Navegador.prototype.adicionar = function (endereco) {
        this.historico.adicionar(endereco);
        this.posicaoAtual = this.historico.tamanho() - 1;
    };
    Navegador.prototype.voltar = function () {
        if (this.posicaoAtual > 0) {
            this.posicaoAtual--;
            return this.historico.pega(this.posicaoAtual);
        }
        return null;
    };
    Navegador.prototype.avancar = function () {
        if (this.posicaoAtual < this.historico.tamanho() - 1) {
            this.posicaoAtual++;
            return this.historico.pega(this.posicaoAtual);
        }
    };
    Navegador.prototype.paginaAtual = function () {
        if (this.posicaoAtual >= 0 && this.posicaoAtual < this.historico.tamanho()) {
            return this.historico.pega(this.posicaoAtual);
        }
    };
    return Navegador;
}());
exports.Navegador = Navegador;
var navegador = new Navegador();
navegador.adicionar("www.google.com");
console.log("Pagina atual: ", navegador.paginaAtual());
navegador.adicionar("www.github.com");
console.log("Pagina atual: ", navegador.paginaAtual());
navegador.voltar();
console.log("Pagina atual: ", navegador.paginaAtual());
