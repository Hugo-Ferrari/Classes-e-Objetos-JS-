// // //pilha é uma estrura de dados de vetor como passe e pormite inserção apenas do final e remoções tambem a partir do final.
// // como isso temos o comportamento concido como LIFO -last on, Fist Out (ultimo a entrar é o primeiro a sair). 
// Pilhas sao usadas em tarefas computacionais que requerem a inversao da ordem de entrada dos dados



//torre de hanoi regras:
// preciso mmovimentar apenas 1 discos e colocando nas hastes, não pode colocar um disco maior em cima de um menor.

//disco 1 sendo o maior, o 2 sendo o do meio e o 3º disco sendo o menor.

export default class Stack{

    #data // vetor privado

    constructor(){

        this.#data = []
    }

    //metodo de inserção do vetor;

    insert(val){
        this.#data.push(val)
    }

    //medoto para a remoção do valor;

    delet(){
        return this.#data.pop() // sempre que for colocar um pop, sempre exibir para o usuario com um return para nn deixar o usuario perdido 

    }


    //método para consultar o topo da pilha
    peek(){
        return this.#data[this.#data.length -1] 
    }


    //ver se o tamanho dele é zero;
    get isEmpty(){
       return this.#data.length ===0 
    }

    print(){
        return JSON.stringify(this.#data) //transformando os dados em JSON e convertendo em string, para conseguir ter uma melhor visualização;
    }
}