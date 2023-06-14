const leia = require("prompt-sync")()

let numero = 0
let soma = 0
let nLidos = -1
let maiorN = 0

while(numero>=0){
    soma += numero
    numero = parseInt(leia("Digite um número: "))
    nLidos ++
    if(numero>maiorN){
        maiorN = numero
    }
}

console.log("Total: "+soma)
console.log("Maior número: "+maiorN)
console.log("Números lidos: "+nLidos)