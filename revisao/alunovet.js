const leia = require("prompt-sync")()

let alunos = ["João","Laura","Diana"]
let matriculas = ["Mat01","Mat02","Mat03"]
let notas = [0,0,0]
let situacao

notas[0] = 6
notas[1] = 3
notas[2] = 7

for(let i=0; i<3; i++){
    notas [i] = parseInt(leia("Digite a nota do aluno: "))
}

console.log("Mat\tAluno\tNota")
for(let i=0; i<alunos.length; i++){
    if(notas[i]>=5){
        situacao = 'aprovado'
    }
    else{
        situacao = 'reprovado'
    }
    console.log(matriculas[i]+"\t"+alunos[i]+"\t"+notas[i]+"\t"+situacao)
}

console.log("Mudando a nota do aluno")
let auxMat = leia("Digite a matricula do aluno: ")
for(let i=0; i<alunos.length; i++){
    if(auxMat == matriculas[i]){
        console.log("Aluno escolhido: "+ alunos[i])
        notas[i] = parseInt(leia("Digite a nova nota do aluno: "))
    }
}

console.log("Mat\tAluno\tNota")
for(let i=0; i<alunos.length; i++){
    if(notas[i]>=5){
        situacao = 'aprovado'
    }
    else{
        situacao = 'reprovado'
    }
    console.log(matriculas[i]+"\t"+alunos[i]+"\t"+notas[i]+"\t"+situacao)
}