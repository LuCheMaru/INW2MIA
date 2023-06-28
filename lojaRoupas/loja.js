const leia = require("prompt-sync")()

let codigo = ["GRP0X-01","GRP0X-02","GRP0X-03","GRP0X-04","GRP0X-05","GRP0X-06","GRP0X-07","GRP0X-08","GRP0X-09","GRP0X-010"]
let produto = [
"BONÉ             ",
"CALÇA            ",
"BERMUDA AFRO     ",
"BATA             ",
"CAMISA AFRO      ",
"SAIA RODADA      ",
"SAIA STYLE       ",
"MACACÃO          ",
"CAMISETA TEMÁTICA",
"CALÇA SOCIAL AFRO"]
let preco = [100.00,150.00,90.00,140.00,150.00,90.00,90.00,150.00,100.00,95.50]
let estoque = [10,10,10,10,10,10,10,10,10,10]
let venda = [0,0,0,0,0,0,0,0,0,0]
let auxCod

do{
    console.log("Loja de roupas")
    console.log("AAAAAAAAAA")
    console.log("\n\n\n")

    console.log("Código\t\tProduto\t\t\tPreco\t\tEstoque")
    for(let i=0; i<codigo.length; i++){
        console.log(codigo[i]+"\t"+produto[i]+"\t"+preco[i]+"\t\t"+estoque[i])
    }

    //laço de compra
    while(true){
        console.log("Compras")
        let auxCod = leia("Digite o codigo do produto que deseja comparar: ").toUpperCase()

        for(let i=0; i<codigo.length; i++){
            if(auxCod == codigo[i]){
                console.log(codigo[i]+"\t"+produto[i]+"\t"+preco[i]+"\t\t"+estoque[i])
                venda[i] = parseInt(leia ("Digite a quantidade que deseja comprar: "))
                console.log("Sub-total "+(preco[i]*venda[i]))
            }
        }

        console.log("Carrinho de compras")
        console.log("COD\tDESCRIÇÃO\tPREÇO\tESTOQUE\tQTDE COMPRADA")
        for(let i=0; i<codigo.length; i++){
            if(venda[i]>0){
                console.log(codigo[i]+"\t"+produto[i]+"\t"+preco[i]+"\t\t"+estoque[i]+"\t\t"+venda[i])
            }
        }
        let continuar = leia("Continuar comprando? S/N: ").toUpperCase()
        if(continuar == 'N'){
            break
        }
    }
    

    opcao = leia("Deseja fazer compras S/N: ").toUpperCase()
} while(opcao != 'N')

console.log("Obrigado por fazer compras aqui, volte sempre")