class aviao{
    constructor(ligado, velocidade, velocidadeMaxima, capacidade, modelo, cor){
        this.ligado = ligado;
        this.velocidade = velocidade;
        this.velocidadeMaxima = velocidadeMaxima;
        this.capacidade = capacidade;
        this.modelo = modelo;
        this.cor = cor
    }
    ligar(){
        console.log("Ligando....")
        this.ligado = true
    }
}

let aviaoED = new aviao(false, 0, 800, 300, "Bimotor", "Preto")
let aviaoTurma = new aviao(false,0,800, 300,"747", "Branco")

aviaoED.ligar()
console.log(aviaoED)