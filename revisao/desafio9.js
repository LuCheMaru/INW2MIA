let limite = 100
let soma = 0

for(let i=1; i<=limite; i++){
    /*if((i%2)==1){
        if((i%3)==0){
            console.log(i)
            soma = soma + i
        }
    }*/
    if((i%2)==1 && (i%3)==0){
        console.log(i)
        soma = soma + i
    }

}
console.log("total: "+soma)