const somarNovo = (num1, num2) =>{
    return num1 + num2;
}
console.log("A "+somarNovo(15,75))
console.log("A",somarNovo(15,75))

const imparPar = numero => {
    if(numero<0){
        return 'Negativo'
    }
    else if(numero==0){
        return '0'
    }
    else if((numero%2)==0){
        return 'Par'
    }
    else{
        return 'Impar'
    }
}
console.log(imparPar(-4))
console.log(imparPar(0))
console.log(imparPar(4))
console.log(imparPar(5))