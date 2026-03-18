// o "m" na frente do javaScript sig module; 

// # sig que a classe é privada

class formaGeometrica{
    #base
    #altura 
    #tipo

    constructor(base, altura, tipo){
        this.#base = base
        this.#altura= altura 
        this.#tipo = tipo
    }
    // get = para listar ou visualizar 
    get base(){
        return this.#base
    }

    get altura(){
        return this.#altura 
    }
    get tipo(){
        return this.#tipo
    }

    //set = inserir valores
    set base(valor){
        if( typeof valor !== "number" || valor<0){
            throw new Error("Erro: a base precisa ser numérica")
        }
        this.#base = valor
    }

    set altura(valor){
        if(typeof valor !== "number" || valor <0){
            throw new Error("Erro: a altura precisa ser numérica")
        }
        this.#altura = valor
    }

    set tipo(valor){
        if(!["R", "T","E"].includes(valor.toUpperCase())){
            throw new Error("ERRO: o tipo precisa ser um dos valores: R, T ou E ");   
        }
        this.#tipo = valor.toUpperCase()
    }

    calcArea(){ 
        switch(this.tipo){
            case "R": 
            return this.#base * this.#altura

            case "T":
                return (this.#base * this.#altura) / 2
            
            case "E":
                return (this.#base/2) *( this.#altura/2) * Math.PI
        }
    }

    
}
let forma1 = new formaGeometrica()
let forma2 = new formaGeometrica() //criando objeto; 
    forma1.altura = 7;
    forma1.base = 12;
    forma1.tipo = "T"

    console.log(`Área de um triangulo de altura ${forma1.altura} e de base ${forma1.base} = ${forma1.calcArea()}`)
    
forma2.altura=12.3,
forma2.base=7.5,
forma2.tipo= "E"
    console.log(`Área da elipse de altura ${forma2.altura} e de base ${forma2.base} = ${forma2.calcArea()}`)
