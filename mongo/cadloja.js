const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('csv-parser');

mongoose.connect('mongodb://127.0.0.1:27017/loja',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeOut: 10000
})

const produtoSchema = new mongoose.Schema({
    codigo: String,
    descricao: String,
    calor: Number,
    estoque: Number
});

const Produtos = mongoose.model('Produtos', produtoSchema);

function lerCVSSalvarMongo(){
    const resultados = []
    fs.createReadStream('Planilha.csv')
    .pipe(csv())
    .on('data',(dados)=>{
        resultado.push(dados);
    })
    .on('end', ()=>{
        Produtos.insertMany(resultados)
        .then(()=>{
            console.log('Dados imporatados');
            mongoose.connection.close();
        })
        .catch((error)=>{
            console.error('Erro ao importar os dados: ', error)
            mongoose.connect.close();
        })
    })
}
lerCVSSalvarMongo();