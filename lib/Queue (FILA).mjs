export default class Queue {
    #data //vetor privado

    constructor() {
        this.#data = []
    }

    //método de inserção na fila
    enqueue(val) {
        this.#data.push(val)
    }

    //método de remoção na fila 

    dequeue() {
        return this.#data.shift() // função shift pega a posição [0] de uma fila e remove;
    }



    //método para consultar o inicio da fila sem remover um elemento
    peek() {
        return this.#data[0] //estou olhando o elemento da posição [0]
    }

    get isEmpty() {
        return this.#data.length === 0 // olho se a lista esta fazia, caso esteja (true)
    }

    //metodo para imprimir a fila (efeitos de depuração)
    print() {
        let output = "[ "
        for (let i = 0; i < this.#data.length; i++) {
            if (output !== "[ ") {
                output += ", " //concatenação para separa os usuarios da fila;
            }
            output += `(${i +1}º): ${this.#data[i]}`
        }
        return output + " ]"
    }
}