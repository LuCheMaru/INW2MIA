const leia = require("prompt-sync")()

let codigo = ["COD001","COD002","COD003","COD004","COD005"]
let produto = ["TECLADO","MOUSE","MONITOR","CADEIRA","CPCGAME"]
let preco = [20,10,150,700,800]
let estoque = [0,0,0,0,0]
let venda = [0,0,0,0,0]

console.log("Código\t\tProduto\t\tPreco\t\tEstoque\t\tVenda")
for(let i=0; i<codigo.length; i++){
    console.log(codigo[i]+"\t\t"+produto[i]+"\t\t"+preco[i]+"\t\t"+estoque[i]+"\t\t"+venda[i])
}

for(let i=0; i<codigo.length; i++){
    estoque[i] = parseInt(leia("Digite o estoque do produto "+produto[i]+": "))
}

console.log("Código\t\tProduto\t\tPreco\t\tEstoque\t\tVenda")
for(let i=0; i<codigo.length; i++){
    console.log(codigo[i]+"\t\t"+produto[i]+"\t\t"+preco[i]+"\t\t"+estoque[i]+"\t\t"+venda[i])
}

console.log("Processo de venda")
let auxCod = leia("Digite o codigo do produto que deseja comparar: ").toUpperCase()
for(let i=0; i<codigo.length; i++){
    if(auxCod == codigo[i]){
        estoque[i] = console.log(codigo[i]+" - "+produto[i]+" estoque: "+estoque[i])
        venda[i] = parseInt(leia("Digite a quantidade que deseja comprar: "))
        console.log("Total da compra: "+(venda[i]*preco[i]))
        estoque[i] = estoque[i] - venda[i]
    }
}

console.log("Código\t\tProduto\t\tPreco\t\tEstoque\t\tVenda")
for(let i=0; i<codigo.length; i++){
    console.log(codigo[i]+"\t\t"+produto[i]+"\t\t"+preco[i]+"\t\t"+estoque[i]+"\t\t"+venda[i])
}