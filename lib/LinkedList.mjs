class Node{
    constructor(val){
        this.data = val
        this.next=null   
     }
}

export default class LinkedList{
    #head // inicio da lista ( cabeça );
    #tail // final da lista ( cauda );
    #count // quantidade para saber quantos nós / nodos tem na lista;

    constructor(){
        this.#head = null
        this.#tail = null
        this.#count = 0
    }
    //  getters que restorna se a lista encadeada esta vazia ou nn
    get isEmpty() {
        return this.#count == 0; // se o contador for 0 ent está vazia 
    }

    //getters que retorna a quantidade de elementos da lista 

    get count(){
        return this.#count // retorna a quantidade de nos / nodes que tem na lista 
    
    }

    // metodo para inserir em qualquer posição
    insert(pos, val){
        // cria um nodo para armazenar o valor pretendido;
        const inserted = new Node(val);


        // 1º caso: a lista esta vazia;

        if(this.isEmpty){
            this.#head = inserted 
            this.#tail = inserted
        }

        this.#count ++ // adicionando a quantidade de valores que tem na lista

    }
}