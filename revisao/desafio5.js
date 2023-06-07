const leia = require("prompt-sync")()

let numero1
let numero2
let numero3
let R
let S
let D

numero1 = parseInt(leia("Digite o primeiro número: "))
numero2 = parseInt(leia("Digite o segundo número: "))
numero3 = parseInt(leia("Digite o terceiro número: "))

R = Math.pow((numero1+numero2),2)
S = Math.pow((numero2+numero3),2)
D = (R+S)/2
console.log("O resultado da equação "+D)