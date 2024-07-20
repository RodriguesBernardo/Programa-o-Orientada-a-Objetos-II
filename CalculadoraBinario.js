"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pilha_1 = require("./pilha");
function calculadoraBinario(decimal) {
    var calculadora = new pilha_1.default();
    var numero = decimal;
    if (numero === 0) {
        return "0";
    }
    while (numero > 0) {
        var resto = numero % 2;
        calculadora.empilhar(resto);
        numero = (numero - resto) / 2;
    }
    var binario = '';
    while (!calculadora.estaVazia()) {
        binario += calculadora.desempilhar();
    }
    return binario;
}
console.log(calculadoraBinario(2));
