/* import { ListaDuplamenteLigada } from "./ListaDuplamenteLigada";

export class Playlist {
  private nome: string;
  private autor: string;
  private duracao: number;
  constructor(name: string, autor: string, duracao: number) {
    this.nome = name;
    this.autor = autor;
    this.duracao = duracao;
  }

  public toString(): string {
    return `${this.nome} by ${this.autor} (${this.duracao} min)`;
  }

  public getDuracao(): number {
    return this.duracao;
  }
  public getNome(): string {
    return this.nome;
  }
}

class TocadorDeMusica {
  private playlist: ListaDuplamenteLigada;
  private posicaoAtual: number;
  constructor() {
    this.playlist = new ListaDuplamenteLigada();
    this.posicaoAtual = 0;
  }

  public adicionarMusica(musica: Playlist, posicao?: number) {
    if (posicao === undefined) {
      this.playlist.adicionar(musica);
    } else {
      this.playlist.adiciona(posicao, musica);
    }
  }
  public removerMusica(posicao: number) {
    this.playlist.remove(posicao);
    if (this.posicaoAtual >= this.playlist.tamanho()) {
      this.posicaoAtual = this.playlist.tamanho() - 1;
    }
  }
  public tocar(): string {
    if (this.playlist.tamanho() === 0) {
      return "Nenhuma musica na playlist";
    }
    return this.playlist.pega(this.posicaoAtual).getNome();
  }
  public proxima(): string {
    if (this.posicaoAtual < this.playlist.tamanho() - 1) {
      this.posicaoAtual++;
    }
    return this.tocar();
  }
  public anterior(): string {
    if (this.posicaoAtual > 0) {
      this.posicaoAtual--;
    }
    return this.tocar();
  }
  public listarMusicas(): string {
    return this.playlist.toString();
  }
  public tempoTotal(): number {
    let total = 0;
    for (let i = 0; i < this.playlist.tamanho(); i++) {
      total += this.playlist.pega(i).getDuracao();
    }
    return total;
  }
}

const tocador = new TocadorDeMusica();

const musica1 = new Playlist("Killer Queen", "Queen", 3);
const musica2 = new Playlist("Dont Stop me now", "Queen", 2.5);
const musica3 = new Playlist("Somebody to love", "Queen", 3.2);

tocador.adicionarMusica(musica1);
tocador.adicionarMusica(musica2);
tocador.adicionarMusica(musica3);

console.log("Playlist atual: ", tocador.listarMusicas());
console.log("Música que está tocando: ", tocador.tocar());
console.log("Próxima música: ", tocador.proxima());
console.log("Música anterior: ", tocador.anterior());
console.log("Tempo total da playlist: ", tocador.tempoTotal());

tocador.removerMusica(1);
console.log("Playlist atual: ", tocador.listarMusicas());
 */