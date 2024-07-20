export default class Fila {
    private elementos;
    private tamanho: number;
    private prioridade: number;

    constructor() {
        this.elementos = [];
        this.tamanho = 0;
        this.prioridade = 0;
    }

    public enfileirar(elemento: any): void {
        this.tamanho++;
        this.elementos[this.tamanho] = elemento;
    }

    public estavazia(): boolean {
        return this.tamanho == 0;
    }

    public ProximoElemento(): string {
        return this.elementos[0];
    }

    public desenfileirar(): string {
        if (this.estavazia()) {
            throw new Error('A pilha esta vazia')
        }else if(this.prioridade > 0){
            this.prioridade--
        }

        this.tamanho--;
        return this.elementos.shift();
    }

    public getTamanho(): number {
        return this.tamanho;
    }

    public toString(): string {
        let s: string = "[";
        for (let i = 0; i < this.tamanho - 1; i++) {
            s += this.elementos[i];
            s += ",";
        }
        if (this.tamanho > 0) {
            s += this.elementos[this.tamanho - 1];
        }
        s += "]";
        return s.toString();
    }

    public enfileirarPrioridade(elemento){
        if(this.prioridade > 0){
            this.tamanho++
            this.prioridade++
            this.elementos.splice(this.prioridade, 0 , elemento);
        }else{
            this.tamanho++
            this.prioridade++
            this.elementos.unshift(elemento)
        }
    }
}

let admin = new Fila()

admin.enfileirar("Banana");
admin.enfileirar("Maça");
admin.enfileirar("Laranja");
console.log(admin.toString());
console.log(".....Adicionando com Prioridade.....")
admin.enfileirarPrioridade("Bergamota")
admin.enfileirarPrioridade("Morango")
admin.enfileirarPrioridade("Limao")
console.log(admin.toString());
console.log(".....Desenfileirando elementos.....")
admin.desenfileirar()
admin.desenfileirar()
admin.desenfileirar()
console.log(admin.toString());