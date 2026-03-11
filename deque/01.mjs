import Deque from "../Deque.mjs";

let listsComparas = new Deque
console.log(listsComparas.print())
console.log(listsComparas.isEmpty)

//produtos alimenticios -> inicio;
listsComparas.insertFront("Arroz")
listsComparas.insertFront("feijão")
listsComparas.insertFront("fruta")
listsComparas.insertFront("doce")

console.log(listsComparas.print())

//produtos higiene / limpeza -> final;

listsComparas.insertBack("sabão em pó")
listsComparas.insertBack("desodorante ")
listsComparas.insertBack("agua sanitaria")
listsComparas.insertBack("pasta de dente")



listsComparas.insertFront("café")
listsComparas.insertFront("açucar")

console.log(listsComparas.print())