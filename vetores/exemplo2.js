const leia = require("prompt-sync")()

//variáveis
let cod = ["C1","C2","C3"]
let desc = ["Camisa","Calça","Saia"]
let valor = [100.00, 60.50, 200.25]
let estoque = [0,0,0]
let movimento = [0,0,0]
let opcaoMenuPrincipal = ""
let opcaoSubMenu = ""
let auxCod = ""
let posicao = ""

//programa principal
while(opcaoMenuPrincipal != "2"){
    console.log("Loja loja\n\n")
    console.log("\tMenu Principal")
    console.log("1 - Opções\n2 - Sair")

    opcaoMenuPrincipal = leia("Digite o número da sua opção: ")

    if(opcaoMenuPrincipal == "1"){
        opcaoSubMenu = ""
        //Sub-menu referente as opções
        while(opcaoSubMenu != "6"){
            console.log("Sub-Menu")
            console.log("1 - Mostrar registros\n2 - Alterar registros\n3 - Cadastrar registros\n4 - Excuir um registro\n5 - Carrinho de compras\n6 - Sair")
            opcaoSubMenu = leia("Digite o número da sua opção: ")
            if(opcaoSubMenu == "1"){
                console.log("Cod\tDescrição\tValor\tEstoque")
                for(let x = 0; x<cod.length;x++){
                    console.log(cod[x]+"\t"+desc[x]+"\t\t"+valor[x]+"\t"+estoque[x])
                }
            }
            else if(opcaoSubMenu == "2"){
                auxCod = leia("Digite o código do produto que deseja alterar: ")
                for(let x = 0; x<cod.length; x++){
                    if(auxCod == cod[x]){
                        posicao = x
                    }
                }
                if(posicao == -1){
                    console.log("Produto não encontrado")
                }
                else{
                    desc[posicao] = leia("Digite a nova descrição");
                    valor[posicao] = parseFloat(leia("Digite o novo preço: "));
                    estoque[posicao] = parseInt(leia("Digite o estoque: "))
                }
            }
        }
    }
}

//fim do programa

console.log("Vaza")