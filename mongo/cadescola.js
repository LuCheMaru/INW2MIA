const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {
        useNewUrlParser : true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS : 10000
});

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'connection error: '))
db.once('open', function(){
    console.log("Conectado ao mongoDB");
});

const alunoSchema = new mongoose.Schema({
    matricula: String,
    Nome: String,
    Idade: Number,
    Turma: String
});

const Aluno = mongoose.model("Aluno", alunoSchema);

const Paulo = new Aluno({
    matricula : 'rm00000',
    Nome : "Paulo Augusto da Silva",
    Idade : 18,
    Turma : '2MIA'
});
Paulo.save();

const Giovana = new Aluno({
    matricula : 'rm00001',
    Nome : "Giovana Carlos Alberto",
    Idade : 18,
    Turma : '2MIA'
});
Giovana.save();