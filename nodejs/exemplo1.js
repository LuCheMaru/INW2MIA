function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Fala desgraça. ')
.then(frase => frase.concat("Sai daqui"))
.then(novaFrase => console.log(novaFrase))