import { ListaDuplamenteLigada } from "./ListaDuplamenteLigada";

export class Navegador{
    private historico: ListaDuplamenteLigada
    private posicaoAtual: number
    constructor(){
        this.historico = new ListaDuplamenteLigada()
        this.posicaoAtual = -1
    }
    public adicionar(endereco:string){
        this.historico.adicionar(endereco)
        this.posicaoAtual = this.historico.tamanho() - 1
    }
    public voltar():string | null{
        if(this.posicaoAtual > 0){
            this.posicaoAtual--
            return this.historico.pega(this.posicaoAtual)
        }
        return null
    }
    public avancar(){
        if(this.posicaoAtual < this.historico.tamanho() - 1){
            this.posicaoAtual++
            return this.historico.pega(this.posicaoAtual)
        }
    }
    public paginaAtual(){
        if(this.posicaoAtual >=0 && this.posicaoAtual < this.historico.tamanho()){
            return this.historico.pega(this.posicaoAtual)
        }
    }
}

const navegador = new Navegador()

navegador.adicionar("www.google.com")
console.log("Pagina atual: ",navegador.paginaAtual())

navegador.adicionar("www.github.com")
console.log("Pagina atual: ",navegador.paginaAtual())

navegador.voltar()
console.log("Pagina atual: ",navegador.paginaAtual())