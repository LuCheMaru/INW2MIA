function createLogin(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email,senha)
    .then(()=>{
        console.log("usuario", user);
        alert('Usuário criado e logado');
    })
    .catch(err=>{
        console.log('Erro ao criar usuário', err)
    })
}

function loginEmail(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email,senha)
    .then(()=>{
        alert('Usuário logado');
    })
    .catch(err=>{
        console.log('error', error)
    })
}