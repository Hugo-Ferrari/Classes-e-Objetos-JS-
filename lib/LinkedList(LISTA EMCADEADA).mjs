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

        // 2º caso: inserção na primeira posiação;
        else if(pos ===0){
            inserted.next = this.#head // next liga a lista, ele conecta como oo resto da lista;
            this.#head = inserted 
        }
        //3º caso: inserção no final da lista
        else if(this.#count <= pos){
            this.#tail.next = inserted // aponta o inserted no tail;
            this.#tail = inserted   // tail começar a receber o inserted;

        }

        //4º caso: posição intermediaria
        else{
            let before = this.#head // criando uma variavel para poder percorrer pelo head
            for(let i =1; i<= pos; i++){
                before = before.next // ele aponta para o proximo elemento da lista
            }
            let after = before.next 

            inserted.next = after 

            before.next =inserted
        }

        this.#count ++ // adicionando a quantidade de valores que tem na lista

    }
     //metodo para inserção na primeira (atalho)
        insertHead(val){
            this.insert(0,val);
        }
    // metodo para inserção na ultima posição( atalho )
        insertTail(val){
            this.insert(this.#count, val)
        }

    // metodo para remoção de um nodo da lista
    remove(pos){
            //1º caso a lista esta vazia ou a posição informada esta fora dos limites da lista
            if(this.isEmpty || pos <0 || pos> this.#count -1){ 
                return undefined
            }

            // remoção do meu inicio da lista(head)

            let removed 
            if(pos === 0){
                
            }
        }

        
}