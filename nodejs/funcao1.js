//função
function escreverNoConsole(){
    console.log("Exemplo função normal")
}
//chamando a função
escreverNoConsole();

//variação da função normal ou declarada

const escreverVariacao = function(){
    console.log("Exemplo 2 variação da função normal")     //aqui o this apontará para window, pois é uma variável global
}
escreverVariacao();

//arrow function - usa os caracters "=" junto com ">"
const escreverArrow = ()=>{
    console.log("Exemplo arrow")
}
escreverArrow();

//arrow function "=>" com parametro
const escreverArrowParametro = (texto)=>{
    console.log(texto);
}
escreverArrowParametro("Exemplo arrow com parametro")
escreverArrowParametro("PÃO")

const somar2 = (numero1, numero2)=>{
    console.log('O resultado da soma é '+(numero1+numero2))
}
somar2(50,3)

//variação da arrow function sem parentes e chaves
const varianteArrow = texto => console.log(texto)


const parImpar = (numero) =>{
    if(numero<0){
        console.log("O valor colocado é negativo")
    }
    else if(numero == 0){
        console.log("O valor colocado é 0")
    }
    else if((numero%2)==0){
        console.log("O valor colocado é par")
    }
    else{console.log("O valor colocado é ímpar")}
    console.log("------------------------------")
}

parImpar(3)
parImpar(-8)
parImpar(50)
parImpar(0)