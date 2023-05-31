class Pneus{				
    constructor(id,descricao,ativo,estoque,preco,valor,modelo,marca){				
    this.id = id;				
    this.descriacao = descricao;				
    this.ativo = ativo;
    this.estoque = estoque;
    this.preco = preco;
    this.valor = valor;
    this.modelo = modelo;
    this.marca = marca			
    }				
                    
    ativar(){				
    this.ativo = true;				
    }				
                    
    retirarEstoque(valor){				
    if (this.ativo){				
    if(valor<0){				
    console.log("Impossivel realizar estoque negativo")				
    }				
    else if(valor==0){				
    console.log("Impossivel realizar, estoque vazio")				
    }
    else if (valor>this.estoque){				
        console.log("Impossivel realizar, estoque indisponivel...")				
    }			
    else {				
    this.estoque -= valor				
    }				
    }				
    else {				
    console.log("Conta inativa.")				
    }				
    }				
                    
    incluirEstoque(valor){				
    if (this.ativo){				
    if(valor<0){				
    console.log("Impossivel realizar estoque negativo...")				
    }				
    else if(valor ==0 ){				
    console.log("Impossivel realizar, estoque vazio")				
    }							
    else {				
    this.estoque += valor				
    }
    }
    else {				
    console.log("Conta inativa.")		
    }			
    }			

    pagar(valor){
        this.preco = this.preco + (250 * valor)
    }
}

const leia = require("prompt-sync")()
    let op = ""
    let valor = ""
    do {
        console.log("Loja de Pneus")
        console.log("Girando até o fim\n")
        op = leia("Deseja fazer uma compra? S/N: ")

        if(op == "S"){
            console.log("Loja de Pneus")
            console.log("Girando até o fim\n")
            console.log("Estoque atual: 10")
            let id = leia("Digite o id da conta: ")
            let descriacao = leia("Digite a descriaçãp do produo: ")
            let pneu = new Pneus(id,descriacao,0,10,250,'run flat','bnw')
            pneu.ativar()
            for(let x=1; x<=5; x++){
                console.log(descriacao)
                valor = parseInt(leia("Digite a quantidade de pneus a serem retirados: "))
                pneu.retirarEstoque(valor)
                console.log("Estoque atual da conta: "+pneu.estoque)
                pneu.pagar(valor)
                console.log("Preço a ser pago: "+ pneu.preco)
            }
            valor = parseInt(leia("Digite a quantidade de pneus a serem incluidos: "))
            pneu.incluirEstoque(valor)
            console.log("Estoque atual da conta: "+pneu.estoque)
        }
        else if(op == "N"){
            console.log("Sair")
        }
        else{
            console.log("Valor não encontrado")
        }
    } while (op != "N")
    console.log("Fim do programa")