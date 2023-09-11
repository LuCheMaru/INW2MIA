const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {
        useNewUrlParser : true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS : 30000
});

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'connection error: '))
db.once('open', function(){
    console.log("Conectado ao mangoDB");
});

const alunoSchema = new mongoose.Schema({
    matricula : String,
    Nome : String,
    Idade : Number,
    Turma : String
});

const Aluno = mongoose.model("Aluno", alunoSchema);

const Paulo = new Aluno({
    matricula : 'rm00000',
    Nome : "Paulo Augusto da Silva",
    Idade : 18,
    Turma : '2MIA'
});

const Giovana = new Aluno({
    matricula : 'rm00001',
    Nome : "Giovana Carlos Alberto",
    Idade : 18,
    Turma : '2MIA'
});

Paulo.save()
Giovana.save()

Aluno.findOne({Nome : 'Giovana Carlos Alberto'}, function(err, Aluno){
    console.log(Aluno)
})