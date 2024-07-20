"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pilha = /** @class */ (function () {
    function Pilha() {
        this.tamanho = 0;
        this.elementos = [];
    }
    Pilha.prototype.empilhar = function (n) {
        this.elementos[this.tamanho] = n;
        this.tamanho++;
    };
    Pilha.prototype.desenfileirar = function () {
        var elementoDesenfileirado = this.elementos[this.tamanho - 1];
        this.tamanho--;
        this.elementos.length = this.tamanho;
        return elementoDesenfileirado;
    };
    Pilha.prototype.toString = function () {
        return this.elementos.toString();
    };
    Pilha.prototype.getTamanho = function () {
        return this.tamanho;
    };
    Pilha.prototype.estaVazia = function () {
        return this.tamanho === 0;
    };
    Pilha.prototype.verificarMinimo = function () {
        if (this.estaVazia()) {
            return null;
        }
        var menorNumero = this.elementos[0];
        for (var i = 1; i < this.tamanho; i++) {
            if (this.elementos[i] < menorNumero) {
                menorNumero = this.elementos[i];
            }
        }
        console.log(menorNumero);
        return menorNumero;
    };
    return Pilha;
}());
exports.default = Pilha;
var Testepilha = new Pilha();
Testepilha.empilhar(1);
Testepilha.empilhar(2);
Testepilha.empilhar(3);
console.log(Testepilha.toString());
Testepilha.desenfileirar();
console.log(Testepilha.toString());
