const leia = require("prompt-sync")()

let nome = leia("Digite seu nome: ")
let referenciacao = leia("Digite O para aluno e A para aluna: ")
let nota = parseInt(leia("Digite uma nota de 1 a 10: "))

if(referenciacao == "O"){
    if(nota<=5){
        console.log("Aluno "+nome+" você ficou de recuperação")
    }
    else if(nota>5 && nota<=10){
        console.log("Aluno "+nome+" você passou")
    }
    else{
        console.log("Número não reconhecido")
    }
}
if(referenciacao == "A"){
    if(nota<=5){
        console.log("Aluna "+nome+" você ficou de recuperação")
    }
    else if(nota>5 && nota<=10){
        console.log("Aluna "+nome+" você passou")
    }
    else{
        console.log("Número não reconhecido")
    }
}