class Node {
    constructor(val) {
        this.prev = null; //o valor que aponta para tras.
        this.data = val;
        this.next = null // next tem que ser iniciado como null 
    }
}

export default class DoublyLinkedList {
    #head
    #tail
    #count

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    get isEmpty(){
        return this.#count === 0;
    }

    get count(){
        return this.#count 
    }

    // método PRIVADO que encontrar um nodo por sua posição;
    #findNode(pos){
        let node
        if(pos< this.#count / 2 ){// pegando o meio da lista
            node =  this.#head
            for(let i =0; i<pos; i++){
                node = node.next;
            }
        } 
        else{
            node = this.#tail;
            for(let i = this.#count -1; i > pos; i-- ){ // cont -1 para pegar o ultimo elemento da lista, o i tem que chegar até a pos;
                node = node.prev;

            }
        }
        return node;
    }

    insert(pos, val){
        let inserted = new Node(val)

        //caso 1º: lista vazia
        if(this.isEmpty){
            this.#head = inserted // inserir valor na cabeça;
            this.#tail = inserted // inserir valor na cauda;

        }
        //caso 2º: inserção na primeira posição;
        else if(pos === 0){
            inserted.next = this.#head
            this.#head.prev = inserted
            this.#head = inserted
        }
        //caso 3º inserção na ultima posição;
        else if(pos >= this.#count){
            inserted.prev = this.#tail // inserted aponta para tras
            this.#tail.next = inserted //tail aponta para o inseted
            this.#tail = inserted // o tail vira o inserted 
        }
        
        //caso 4º inserção em posição intermediaria
    }


}
