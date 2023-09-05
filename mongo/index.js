//mongodb://localhost:27017

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/exemplo',
    {useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000});

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'connection error: '))

db.once('open',function(){
    console.log("Estamos conectados ao banco")
})

const pessoaSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    profissao: String
})

const Pessoa = mongoose.model('Pessoa', pessoaSchema)

const marcos = new Pessoa({
    nome: 'Marcos',
    idade: 25,
    profissao: 'Estudante'
});

const pedroH = new Pessoa({
    nome: 'Pedro Henrique',
    idade: 100,
    profissao: 'Estudante'
});

console.log(marcos.nome);
console.log(marcos.idade);
console.log(marcos.profissao);
console.log(pedroH.nome);
console.log(pedroH.idade);
console.log(pedroH.profissao);
marcos.save();
pedroH.save();