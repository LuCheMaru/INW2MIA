const leia = require("prompt-sync")()

let X1 = parseInt(leia("Digite o primeiro número: "))
let Y1 = parseInt(leia("Digite o segundo número: "))
let X2 = parseInt(leia("Digite o terceiro número: "))
let Y2 = parseInt(leia("Digite o quarto número: "))
let D = Math.sqrt(Math.pow((X2-X1),2) + Math.pow((Y2-Y1),2))

console.log("O resultado da equação é " + D)