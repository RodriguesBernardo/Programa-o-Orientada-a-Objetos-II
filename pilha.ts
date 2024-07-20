export default class Pilha {
    private tamanho: number;
    private elementos: any[];

    constructor() {
        this.tamanho = 0;
        this.elementos = [];
    }

    public empilhar(n: number): void {
        this.elementos[this.tamanho] = n;
        this.tamanho++;
    }

    public desenfileirar():string{
        const elementoDesenfileirado = this.elementos[this.tamanho - 1]
        this.tamanho--
        this.elementos.length = this.tamanho 
        return elementoDesenfileirado
       }

    public toString(): string {
        return this.elementos.toString();
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public estaVazia(): boolean {
        return this.tamanho === 0;
    }

    public verificarMinimo(): number | null {
        if (this.estaVazia()) {
            return null;
        }
        let menorNumero = this.elementos[0];
        for (let i = 1; i < this.tamanho; i++) {
            if (this.elementos[i] < menorNumero) {
                menorNumero = this.elementos[i];
            }
        }
        console.log(menorNumero);
        return menorNumero;
    }
}

const Testepilha = new Pilha()
Testepilha.empilhar(1)
Testepilha.empilhar(2)
Testepilha.empilhar(3)
console.log(Testepilha.toString())
Testepilha.desenfileirar()
console.log(Testepilha.toString())

