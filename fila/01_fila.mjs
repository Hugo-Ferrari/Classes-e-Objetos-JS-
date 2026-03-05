import Queue from "../lib/Queue (FILA).mjs";

let fila = new Queue;
console.log(fila.print())
console.log("Esta vazia? ", fila.isEmpty ? "simm" : "nãoo")

// inserções na fila 
fila.enqueue("Alexandre")
fila.enqueue("joão")
fila.enqueue("maria")
fila.enqueue("Claudia")

let proximo = fila.peek()
console.log({proximo})

let atendido = fila.dequeue()
console.log(atendido)

proximo = fila.peek() // tem que chamar o peek toda vez para mostrar o novo usuario a ser atendido;
console.log(fila.print())
console.log({proximo})

atendido = fila.dequeue()
console.log(atendido)
proximo = fila.peek();
console.log({proximo})