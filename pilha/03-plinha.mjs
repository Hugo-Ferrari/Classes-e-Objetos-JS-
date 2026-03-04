import Stack from "./lib/Stack.mjs";

let frase = "Scorram-me, subi no onibus em Marrocos  "

let pilha = new Stack();

for(let i =0; i< frase.length; i++){
    pilha.insert(frase.charAt(i)) // esta adicionando na pilha que esta vazia os elementos que compoe cada caracter (o insert é um metodo, o print tbmm)
}

console.log(pilha.print())

let reverso = ""

while(!pilha.isEmpty){
    reverso+= pilha.delet()
}


console.log(reverso )

