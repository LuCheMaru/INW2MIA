class pessoa{
    constructor(cpf,nome,anoNascimento){
        this.cpf = cpf;
        this.nome = nome;
        this.anoNascimento = anoNascimento
    }
    mostrarIdade(){
        console.log("Idade: "+(2023-this.anoNascimento))
    }
}

const leia = require("prompt-sync")()

let p1 = new pessoa("000.111.222-33","Laura",2009)
let p2 = new pessoa("111.222.333-44","Pedro",2001)

console.log(p1)
p1.mostrarIdade()