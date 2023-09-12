let p = new Promise(function(cumpriPromessa){
    cumpriPromessa(['Anderviana','Busmavanasa','Condefrapudo','Damilonssion'])
})

p
.then(valor => valor[0])
.then(valor => console.log(valor))