const leia = require("prompt-sync")()

let alunos = ["","","",""]
let notas = [0,0,0,0]
let situacao = ""

for(let i=0; i<alunos.length; i++){
    alunos[i] = leia("Digite o nome do aluno(a): ")
    notas[i] = parseInt(leia("Digite a nota: "))
}

console.log("Boletim")
console.log("Nome\tNota\tSituação")
for(let i=0; i<alunos.length; i++){
    if(notas[i]<5){
        situacao = 'rec'
    }
    else{
        situacao = 'aprovado'
    }
    console.log(alunos[i]+'\t'+notas[i]+'\t'+situacao)
}