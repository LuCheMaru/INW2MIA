class Retangulo{
    constructor(base, altura){
        this.base = base;
        this.altura = altura
    }
    mostrarArea(){
        console.log("A área é: " + this.altura * this.base)
    }
}

//Programa principal

let objeto1 = new Retangulo(5,3)
let objeto2 = new Retangulo(4,2)

objeto1.mostrarArea()
objeto2.mostrarArea()