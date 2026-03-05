export default class Deque{
    #data 

    constructor(){
        this.#data = []
    }

    //metodos para inserir no inicio da estrutura;

    insertFront(val){
        this.#data.unshift(val) //metodo para colocar na posição inicial 

    }


    //metodo para inserir dados no final da estrutura 
    insertBack(val){
        this.#data.push(val) // push para inserir
    }
    //metodos para remover dados no inicio da estrutura
    removeFront(){
        return this.#data.shift() //shift para remover no inicio

    }
    removeBack(){
        return this.#data.pop() //pop para remover atras
    }

    //metodo para consultar o inicio da estrutura;
    peekFront(){
        return this.#data[0]
    }

    //metodo para consultar o final da estrutura;
    peekBack(){
        return this.#data[this.#data.length -1] //para dar uma olhadinha na ultima posição
    }

    get isEmpty(){
        return this.#data.length ==0 ? "sim, é vazia " : "não, não é vazia "; // visualizar se o deque é vazio ou não
    }

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