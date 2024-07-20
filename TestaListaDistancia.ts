import { ListaDuplamenteLigada } from "./ListaDuplamenteLigada";
import { Trajeto } from "./Trajeto";

const listaTeste = new ListaDuplamenteLigada;

const trajeto1 = new Trajeto("Local 1",30,20)
const trajeto2 = new Trajeto("Local 2",10,15)
const trajeto3 = new Trajeto("Local 3",40,25)
const trajeto4 = new Trajeto("Local 4",50,60)
const trajeto5 = new Trajeto("Local 5",15,20)



/* listaTeste.adicionar(trajeto1)
listaTeste.adicionar(trajeto2)
listaTeste.adicionar(trajeto3)
listaTeste.adicionar(trajeto4)
listaTeste.adicionar(trajeto5) */

console.log("Lista Atual: ",listaTeste.toString())
console.log("Quantidade de elementos na lista: ",listaTeste.tamanho())

listaTeste.remove(3)
console.log("Lista atualizada: ",listaTeste.toString())

listaTeste.removeDoComeco()
console.log("Lista atualizada: ",listaTeste.toString())

listaTeste.removeDoFim()
console.log("Lista atualizada: ",listaTeste.toString())

/* console.log("A lista contem o trajeto 3? ",listaTeste.contem(trajeto3)) */