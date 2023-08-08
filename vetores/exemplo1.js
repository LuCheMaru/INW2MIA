const leia = require("prompt-sync")()

let auxMat
let indice = -1
let matricula = ["M01","M02","M03","M04"]
let nome = ["Paulo","Maria","Pedro","Marcos"]
let nota = [0,0,0,0]

//Listagem
console.log("Matricula\tNome\tNota")

for(let i=0;i<matricula.length;i++){
    console.log(matricula[i]+"\t\t"+nome[i].toUpperCase()+"\t"+nota[i])
}

//Cadastrar nota de um aluno especifico
auxMat = leia("Digie a matrícula do aluno: ").toUpperCase()
console.log(auxMat)

for(let i=0;i<matricula.length;i++){
    if (auxMat == matricula[i]){
        indice = i
    }
}
if(indice != -1){
    console.log("O aluno é "+nome[indice])
    nota[indice] = leia("Digite a nota do aluno 1-10: ")
    if(nota[indice]<6){
        console.log(nome[indice]+" sua nota é "+nota[indice]+", você está em recuperação")
    }
    else{
        console.log(nome[indice]+" sua nota é "+nota[indice]+", você está aprovado(a)")
    }
}