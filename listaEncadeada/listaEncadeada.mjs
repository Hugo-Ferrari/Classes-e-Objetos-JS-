import LinkedList from "../lib/LinkedList(LISTA EMCADEADA).mjs";

const  lista = new LinkedList();

console.log("A lista esta vazia? " + lista.isEmpty ? "Sim, está vazia ": "Não!");


console.log(lista.print())

lista.insert(0, 'Fusca')
lista.insert(0, 'Corsel')
lista.insert(2, 'Opala')
lista.insert(3, 'Chevette')
lista.insert(4, 'Uno')

console.log(lista.print())

lista.insert(3, 'Gol GV')

console.log(lista.print())

lista.insertHead("Belina")
lista.insertTail("Del Rey")

console.log(lista.print())

let removido = lista.remove(0);
console.log(removido) // mostrando o que esta sendo removido;
console.log(lista.print());

let idxFusca = lista.indexOf("Fusca")
let idxOpala = lista.indexOf("Opala")
let idxNiguem = lista.indexOf("Niguem")

console.log(idxFusca,idxOpala, idxNiguem)

let pos0= lista.peek()
let pos3 = lista.peek(3)
let pos10 = lista.peek(10)

console.log({pos0, pos3, pos10})
