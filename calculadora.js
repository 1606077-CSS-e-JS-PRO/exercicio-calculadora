

function somar(numeroUm, numeroDois){
    return numeroUm + numeroDois
}

function subtrair(numeroUm, numeroDois){
    return numeroUm - numeroDois
}

function multiplicar(numeroUm, numeroDois){
    return numeroUm * numeroDois
}

function dividir(numeroUm, numeroDois){
    if(numeroDois == 0) 
        return -101

    return numeroUm / numeroDois
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}