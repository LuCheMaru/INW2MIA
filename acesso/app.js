const firebaseConfig={
    apiKey: "AIzaSyDWKjFwDBMC5nt27Vzogojr38bDtbILYuI",
    authDomain: "projeto2miateste-2228e.firebaseapp.com",
    projectId: "projeto2miateste-2228e",
    storageBucket: "projeto2miateste-2228e.appspot.com",
    messagingSenderId: "1083037266704",
    appId: "1:1083037266704:web:51cb01566d9b793d172b95"
};

firebase.initializeApp(firebaseConfig);



/*const emailField = document.getElementById("email")
const passwordField = document.getElementById("password")
const loginButton = document.getElementById("loginButton")

loginButton.addEventListener('click',()=>{
    const email = emailField.value;
    const password = passwordField.value;
    
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log("Usuário logado: ", user)
    })
    .catch((error)=>{
        const errorMessage = error.message;
        console.error("Erro de autenticação: ", errorMessage)
    })
})*/