class Animal{
    constructor(tipo, porte, femea, nascimento){
        this.tipo = tipo;
        this.porte = porte;
        this.femea = femea;
        this.nascimento = nascimento;
    }

    fazerBarulho(){
        console.log("Fazendo barulho")
    }

    retornarIdade(anoAtual){
        return anoAtual - this.nascimento
    }
}

class Gato extends Animal{
    constructor(tipo, raca, cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor
    }

    miar(){
        console.log("Miar")
    }
}

class Cachorro extends Animal{
    constructor(tipo, raca, cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor
    }

    latir(){
        console.log("au")
    }
}


//Programa principal
let bicho1 = new Animal("mamifero", "medio", false, 2020)
let frajola = new Gato("felino", "sphynx", "preto")
let snoop = new Cachorro("canino","beagle","malhado")

//console.log(bicho1)
console.log(bicho1.porte)
bicho1.fazerBarulho()
frajola.fazerBarulho()
frajola.miar()
frajola.nascimento = 1997
console.log("A idade é "+frajola.retornarIdade(2023))
snoop.latir()
snoop.nascimento = 2021
console.log("A idade é "+snoop.retornarIdade(2023))