import Stack from "./Stack.mjs";

let pilha = new Stack() //criando o objeto;



console.log(" Está vazia? ", pilha.isEmpty) //como isEmpty é um get nn precisamos ()
pilha.insert(35)
pilha.insert(77)
pilha.insert(19)


console.log(" Está vazia? ", pilha.isEmpty)
console.log(pilha.print())

let removido =pilha.pop()
console.log({removido} , pilha.print())


