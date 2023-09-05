function loginEmail(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    firebase.auth().signInWiithEmailAndPassword(email,senha)
    .then(()=>{
        alert('Usuário logado');
    })
    .catch(err=>{
        console.log('error', error)
    })
}