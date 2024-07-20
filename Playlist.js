"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playlist = void 0;
var ListaDuplamenteLigada_1 = require("./ListaDuplamenteLigada");
var Playlist = /** @class */ (function () {
    function Playlist(name, autor, duracao) {
        this.nome = name;
        this.autor = autor;
        this.duracao = duracao;
    }
    Playlist.prototype.toString = function () {
        return "".concat(this.nome, " by ").concat(this.autor, " (").concat(this.duracao, " min)");
    };
    Playlist.prototype.getDuracao = function () {
        return this.duracao;
    };
    Playlist.prototype.getNome = function () {
        return this.nome;
    };
    return Playlist;
}());
exports.Playlist = Playlist;
var TocadorDeMusica = /** @class */ (function () {
    function TocadorDeMusica() {
        this.playlist = new ListaDuplamenteLigada_1.ListaDuplamenteLigada;
        this.posicaoAtual = 0;
    }
    TocadorDeMusica.prototype.adicionarMusica = function (musica, posicao) {
        if (posicao === undefined) {
            this.playlist.adicionar(musica);
        }
        else {
            this.playlist.adiciona(posicao, musica);
        }
    };
    TocadorDeMusica.prototype.removerMusica = function (posicao) {
        this.playlist.remove(posicao);
        if (this.posicaoAtual >= this.playlist.tamanho()) {
            this.posicaoAtual = this.playlist.tamanho() - 1;
        }
    };
    TocadorDeMusica.prototype.tocar = function () {
        if (this.playlist.tamanho() === 0) {
            return "Nenhuma musica na playlist";
        }
        return this.playlist.pega(this.posicaoAtual).getNome();
    };
    TocadorDeMusica.prototype.proxima = function () {
        if (this.posicaoAtual < this.playlist.tamanho() - 1) {
            this.posicaoAtual++;
        }
        return this.tocar();
    };
    TocadorDeMusica.prototype.anterior = function () {
        if (this.posicaoAtual > 0) {
            this.posicaoAtual--;
        }
        return this.tocar();
    };
    TocadorDeMusica.prototype.listarMusicas = function () {
        return this.playlist.toString();
    };
    TocadorDeMusica.prototype.tempoTotal = function () {
        var total = 0;
        for (var i = 0; i < this.playlist.tamanho(); i++) {
            total += this.playlist.pega(i).getDuracao();
        }
        return total;
    };
    return TocadorDeMusica;
}());
var tocador = new TocadorDeMusica();
var musica1 = new Playlist('Killer Queen', 'Queen', 3);
var musica2 = new Playlist('Dont Stop me now', 'Queen', 2.5);
var musica3 = new Playlist('Somebody to love', 'Queen', 3.2);
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
