const leia = require("prompt-sync")()

let limite = parseInt(leia("Digite um número: "))

for(let i=1; i<=limite; i++){
    if((i%2)==0){
        console.log(i+" par")
    }
    else{
        console.log(i+" ímpar")
    }
}