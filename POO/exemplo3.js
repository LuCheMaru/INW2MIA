class Pessoa{
    constructor(cpf,nome,anoNascimento){
        this.cpf = cpf
        this.nome = nome
        this.anoNascimento = anoNascimento
    }
    mostrarIdade(){
        console.log(2023 - this.anoNascimento)
    }
}

//programa
let cliente1 = new Pessoa("111.222.33-44","Marcos",1974)
console.log(cliente1)
cliente1.mostrarIdade()
console.log(cliente1.nome)