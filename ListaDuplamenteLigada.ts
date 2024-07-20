import { Celula } from './Celula';

export class ListaDuplamenteLigada {
    private primeira: Celula | null;
    private ultima: Celula | null;
    private totalDeElementos: number;

    constructor() {
        this.primeira = null;
        this.ultima = null;
        this.totalDeElementos = 0;
    }

    public adicionaNoComeco(elemento: string): void {
        const nova = new Celula(this.primeira, null, elemento);
        if (this.primeira !== null) {
            this.primeira.setAnterior(nova);
        }
        this.primeira = nova;
        if (this.totalDeElementos === 0) {
            this.ultima = this.primeira;
        }
        this.totalDeElementos++;
    }

    public adicionar(elemento: string): void {
        if (this.totalDeElementos === 0) {
            this.adicionaNoComeco(elemento);
        } else {
            const nova = new Celula(null, this.ultima, elemento);
            if (this.ultima !== null) {
                this.ultima.setProxima(nova);
            }
            this.ultima = nova;
            this.totalDeElementos++;
        }
    }

    public adiciona(posicao: number, elemento: string): void {
        if (posicao === 0) {
            this.adicionaNoComeco(elemento);
        } else if (posicao === this.totalDeElementos) {
            this.adicionar(elemento);
        } else {
            const anterior = this.pegaCelula(posicao - 1);
            const proxima = anterior.getProxima();
            const nova = new Celula(proxima, anterior, elemento);
            anterior.setProxima(nova);
            if (proxima !== null) {
                proxima.setAnterior(nova);
            }
            this.totalDeElementos++;
        }
    }

    public pega(posicao: number): string {
        return this.pegaCelula(posicao).getElemento();
    }

    private pegaCelula(posicao: number): Celula {
        if (!this.posicaoOcupada(posicao)) {
            throw new Error("Posição não existe");
        }
        let atual = this.primeira;
        for (let i = 0; i < posicao; i++) {
            atual = atual!.getProxima();
        }
        return atual!;
    }

    private posicaoOcupada(posicao: number): boolean {
        return posicao >= 0 && posicao < this.totalDeElementos;
    }

    public removeDoComeco(): void {
        if (!this.posicaoOcupada(0)) {
            throw new Error("Posição não existe");
        }
        this.primeira = this.primeira!.getProxima();
        if (this.primeira !== null) {
            this.primeira.setAnterior(null);
        } else {
            this.ultima = null;
        }
        this.totalDeElementos--;
    }

    public removeDoFim(): void {
        if (!this.posicaoOcupada(this.totalDeElementos - 1)) {
            throw new Error("Posição não existe");
        }
        if (this.totalDeElementos === 1) {
            this.removeDoComeco();
        } else {
            this.ultima = this.ultima!.getAnterior();
            this.ultima!.setProxima(null);
            this.totalDeElementos--;
        }
    }

    public remove(posicao: number): void {
        if (!this.posicaoOcupada(posicao)) {
            throw new Error("Posição não existe");
        }
        if (posicao === 0) {
            this.removeDoComeco();
        } else if (posicao === this.totalDeElementos - 1) {
            this.removeDoFim();
        } else {
            const anterior = this.pegaCelula(posicao - 1);
            const atual = anterior.getProxima()!;
            const proxima = atual.getProxima();
            anterior.setProxima(proxima);
            if (proxima !== null) {
                proxima.setAnterior(anterior);
            }
            this.totalDeElementos--;
        }
    }

    public contem(elemento: string): boolean {
        let atual = this.primeira;
        while (atual !== null) {
            if (JSON.stringify(atual.getElemento()) === JSON.stringify(elemento)) {
                return true;
            }
            atual = atual.getProxima();
        }
        return false;
    }

    public tamanho(): number {
        return this.totalDeElementos;
    }

    public toString(): string {
        if (this.totalDeElementos === 0) {
            return "[]";
        }
        let str = "[";
        let atual = this.primeira;
        for (let i = 0; i < this.totalDeElementos - 1; i++) {
            str += atual!.getElemento();
            str += ", ";
            atual = atual!.getProxima();
        }
        str += atual!.getElemento();
        str += "]";
        return str;
    }

    public getCelula(posicao: number): Celula {
        return this.pegaCelula(posicao);
    }


}
