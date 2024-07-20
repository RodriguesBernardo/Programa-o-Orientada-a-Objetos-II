import Pilha from "./pilha";

function calculadoraBinario(decimal: number): string {
    const calculadora = new Pilha();
    let numero = decimal;

    if (numero === 0) {
        return "0";
    }

    while (numero > 0) {
        const resto = numero % 2;
        calculadora.empilhar(resto);
        numero = (numero - resto) / 2;  
    }

    let binario = '';
    while (!calculadora.estaVazia()) {
        binario += calculadora.desempilhar();
    }

    return binario;
}

console.log(calculadoraBinario(2)); 
