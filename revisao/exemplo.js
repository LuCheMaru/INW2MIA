const leia = require("prompt-sync")()

let valor1 = 0
let nome = leia("Digite o seu nome: ")
valor1 = parseFloat(leia("Digite a temperatura em celcius: "))
console.log("oi "+nome+" a temperatura em kelvin é "+(valor1+273))