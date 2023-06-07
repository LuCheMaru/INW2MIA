const leia = require("prompt-sync")()

let numero

numero = parseInt(leia("Digite um número: "))

console.log("A raiz quadrada do número é "+(Math.sqrt(numero)))
console.log("O número ao cubo é "+(Math.pow(numero,3)))