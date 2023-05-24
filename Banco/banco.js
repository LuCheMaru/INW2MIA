class Conta{				
    constructor(numero,cpf,saldo,ativo){				
    this.numero = numero;				
    this.cpf = cpf;				
    this.saldo = saldo;				
    this.ativo = ativo				
    }				
                    
    ativar(){				
    this.ativo = true;				
    }				
                    
    credito(valor){				
    if (this.ativo){				
    if(valor<0){				
    console.log("Impossivel realizar, valor negativo")				
    }				
    else if(valor==0){				
    console.log("Impossivel realizar, valor zerado...")				
    }				
    else {				
    this.saldo += valor				
    }				
    }				
    else {				
    console.log("Conta inativa....")				
    }				
    }				
                    
    debito(valor){				
    if (this.ativo){				
    if(valor<0){				
    console.log("Impossivel realizar, valor negativo...")				
    }				
    else if(valor ==0 ){				
    console.log("Impossivel realizar, valor zerado...")				
    }				
    else if (valor>this.saldo){				
    console.log("Impossivel realizar, saldo indisponivel...")				
    }				
    else {				
    this.saldo -= valor				
    }				
    }				
    else {				
    console.log("Conta inativa...")				
    }				
    }				

    }

    class Poupanca extends Conta{
        constructor(numero,cpf,saldo,ativo,diaAniversarioPoupanca){
            super(numero,cpf,saldo,ativo);
            this.diaAniversarioPoupanca = diaAniversarioPoupanca
        }
        correcao(dia){
            if(dia == this.diaAniversarioPoupanca){
                this.credito(this.saldo*0.05)
            }
        }
    }

    class Corrente extends Conta{
        constructor(numero,cpf,saldo,ativo,contadorTalao){
            super(numero,cpf,saldo,ativo);
            this.contadorTalao = contadorTalao
        }
        pedirTalao(qtde){
            if(qtde>this.contadorTalao){
                console.log("Não é possível realizar o cheque, limite de 3")
            }
            else if((qtde*30)>this.saldo){
                console.log("Impossível realizar cheque, saldo insuficiente")
            }
            else{
                console.log("Emitindo talão")
                this.contadorTalao = this.contadorTalao - qtde
                this.debito(qtde * 30)
            }
            console.log("talões disponíveis "+this.contadorTalao)
            console.log("Saldo atual conta R$: "+this.saldo)
        }
    }

    class Especial extends Conta{
        constructor(numero,cpf,saldo,ativo,limite){
            super(numero,cpf,saldo,ativo);
            this.limite = limite
        }

        usarLimite(valor){
            if(valor>this.limite){
                console.log("Impossível realizar, limite alcançado")
            }
            else{
                this.limite = this.limite - valor
                this.credito(valor)
            }
            console.log("Limite atual: "+this.limite)
            console.log("Saldo atual conta R$: "+this.saldo)
        }
    }
                    
    // PROGRAMA PRINCIPAL				
    const leia = require("prompt-sync")()
    let op = ""
    let opcao = ""
    let valor = ""
    let talao = ""
    let limite = ""
    do {
        console.log("Bank")
        console.log("O banco do milenio\n")
        console.log("1 - conta poupança")
        console.log("2 - conta corrente")
        console.log("3 - conta especial")
        console.log("4 - sair")
        op = leia("Digite o número da sua opção: ")

        if(op == "1"){
            console.log("Bank")
            console.log("O banco do milenio\n")
            console.log("Conta Poupança\n")
            let numero = leia("Digite o número da conta: ")
            let cpf = leia("Digite o cpf da conta: ")
            let diaAniversarioPoupanca = leia("Digite o dia de aniversário da conta: ")
            let cp1 = new Poupanca(numero,cpf,0,false,diaAniversarioPoupanca)
            cp1.ativar()
            for(let x=1; x<=10; x++){
                valor = parseInt(leia("Digite o valor: "))
                opcao = leia("Digite D para débito ou C para crédito: ")
                if(opcao == "C"){
                    cp1.credito(valor)
                }
                else if (opcao == "D"){
                    cp1.debito(valor)
                }
                console.log("Saldo atual da conta: "+cp1.saldo)
            }
            let dia = leia("Digite o dia de hoje: ")
            cp1.correcao(dia)
            console.log("Saldo atual da conta: "+cp1.saldo)
        }
        else if(op == "2"){
            console.log("Bank")
            console.log("O banco do milenio\n")
            console.log("Conta Corrente\n")
            let numero = leia("Digite o número da conta: ")
            let cpf = leia("Digite o cpf da conta: ")
            let cc1 = new Corrente(numero,cpf,0,false,3)
            cc1.ativar()
            for(let x=1; x<=10; x++){
                valor = parseInt(leia("Digite o valor: "))
                opcao = leia("Digite D para débito ou C para crédito: ")
                if(opcao == "C"){
                    cc1.credito(valor)
                }
                else if (opcao == "D"){
                    cc1.debito(valor)
                }
                console.log("Saldo atual da conta: "+cc1.saldo)
            }
            let desejatalao = leia("Deseja obter um talão? Digite S para aceitar e N para recusar: ")
            if(desejatalao == "S"){
                cc1.pedirTalao(talao)
            }
        }
        else if(op == "3"){
            console.log("Bank")
            console.log("O banco do milenio\n")
            console.log("Conta Especial\n")
            let numero = leia("Digite o número da conta: ")
            let cpf = leia("Digite o cpf da conta: ")
            let ce1 = new Especial(numero,cpf,0,false,1000)
            ce1.ativar()
            for(let x=1; x<=10; x++){
                valor = parseInt(leia("Digite o valor: "))
                opcao = leia("Digite D para débito ou C para crédito: ")
                if(opcao == "C"){
                    ce1.credito(valor)
                }
                else if (opcao == "D"){
                    ce1.debito(valor)
                }
                console.log("Saldo atual da conta: "+ce1.saldo)
                ce1.usarLimite(limite)
            }

        }
        else if(op == "4"){
            console.log("Sair")
        }
        else{
            console.log("Valor não encontrado")
        }
    } while (op != "4")
    console.log("Fim do programa")
    /*let numero = parseInt(leia("Digite o numero da conta : "))				
    let cpf = leia("Digite o cpf da conta : ")				
    let c1 = new Conta(numero,cpf,0,false)				
    let op=""				
    let valor = 0				
    c1.ativar()				
    for (let x=1; x<=10; x++){				
    console.log("Movimento : "+x)				
    console.log("Saldo atual conta : "+c1.saldo)				
    op = leia("Digite D - debito ou C para credito : ")				
    if(op=="D"){				
    valor = parseInt(leia("Digite o valor para debito : "))				
    c1.debito(valor)				
    }				
    else if(op=="C"){				
    valor = parseInt(leia("Digite o valor para crédito : "))				
    c1.credito(valor)				
    }				
    }				
    console.log("Saldo final da conta "+c1.saldo)*/