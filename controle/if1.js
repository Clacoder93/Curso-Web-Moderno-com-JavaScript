function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota);
    }
}
soBoaNoticia(8.1)
soBoaNoticia(Math.ceil(6.1))
soBoaNoticia(6.3)

function seForVerdadeEuFalo(valor) {
    if(valor)
        console.log('É Verdade...'+valor)
        
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo(7<3)
seForVerdadeEuFalo(7>3)
seForVerdadeEuFalo('?')
seForVerdadeEuFalo({})
seForVerdadeEuFalo([])