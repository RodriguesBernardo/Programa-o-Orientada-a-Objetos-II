export class Celula {
    private proxima: Celula | null;
    private anterior: Celula | null;
    private elemento: string;

    constructor(proxima: Celula | null, anterior: Celula | null, elemento: string) {
        this.proxima = proxima;
        this.anterior = anterior;
        this.elemento = elemento;
    }

    public setProxima(proxima: Celula | null): void {
        this.proxima = proxima;
    }

    public getProxima(): Celula | null {
        return this.proxima;
    }

    public setAnterior(anterior: Celula | null): void {
        this.anterior = anterior;
    }

    public getAnterior(): Celula | null {
        return this.anterior;
    }

    public getElemento(): string {
        return this.elemento;
    }
}
