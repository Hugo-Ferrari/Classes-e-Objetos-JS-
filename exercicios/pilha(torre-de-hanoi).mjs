/*
    1. Veja, na imagem "Torre-De-Hanoi-4-Discos.png", como funciona o jogo das Torres de Hanoi com 4 discos.

    2. Cada uma das torres do jogo se comporta como uma pilha.

    3. Em hipótese alguma, um disco maior pode ficar sobre um disco menor.

    3. Importe a classe apropriada "PILHA" da pasta "lib" e crie três pilhas, representando as três torres.
    
    4. Comece o jogo com os 4 discos na TorreB conforme a imagem "Torre-De-Hanoi-4-Discos.png", nesta ordem [1,2,3,4].

    5. Implemente o método correto que move um disco de uma torre para outra.

    6. Finalize o jogo com os 4 discos na TorreA. Use o método print() para exibir as três pilhas ANTES e DEPOIS,
    conforme a imagem "Torre-Impressao.png". DEPOIS das movimentações, a TorreA deve estar com os discos na
    ordem [1,2,3,4] e as outras duas torres (TorreB e TorreC) devem estar vazias.
*/

import Stack from "./lib/Stack.mjs";

const torreA = new Stack()
const torreB = new Stack()
const torreC = new Stack()

torreB.push(1)
torreB.push(2)
torreB.push(3)
torreB.push(4)
console.log("ANTES")
console.log(torreA.print())
console.log(torreB.print())
console.log(torreC.print())

console.log("======================")
// executando a torre de hanoi 
hanoi(4, torreB,torreA ,torreC )
console.log("DEPOIS ")
console.log(torreA.print())
console.log(torreB.print())
console.log(torreC.print())

//================================================================
// começando a logica para a torre de hanoi
//origem, destino, auxiliar

// origem torreB, 
// destino TorreA,
// auxiliar TorreC;
function hanoi(n, origem, destino, aux) { // (NUMERO DE DISCO, ONDE COMEÇA, AONDE EU QUERO COLOCAR A TORRE, E A TORRE QUE VAI ME AJUDAR A PASSAR PARA O DESTINO)
                                          // REGRA: (n-1, passa da orgiem para o auxliar
                                          //         do auxliar para o distino)
    if (n === 1) {
        MoverDisco(origem, destino)
        returnuijo
    }
    hanoi(n - 1, origem, aux, destino) // numero - 1, tirar ele da origem, mandar ele para o auxiliar 
    MoverDisco(origem, destino) // pego o numero e jogo no destino direto
    hanoi(n - 1, aux, destino, origem) // tirar ele do auxiliar, colocar no destino;
}

function MoverDisco(origem, destino) {
    let disco = origem.peek()

    
        if (!destino.isEmpty && destino.peek() > disco) { //se o destino nn estiver vazio e o destino estiver uma peça que seja menor que a ira colocar, vai dar erro;
            throw new Error("disco invalido")
           
        }

    disco = origem.pop()
    destino.push(disco)
}

