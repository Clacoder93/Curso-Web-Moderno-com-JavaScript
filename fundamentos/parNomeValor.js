// par nome/valor

const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'falaaaa' //contexto léxico 2
    return saudacao
}
const cliente = {
    nome: 'Lino',
    idade: 25,
    peso: 72.6,
    endereco: {
        logradouro: 'Rua Ver. Emidio Amorim Verissimo',
        numero: 48,
        complemento: 'Casa aos fundos'
    }
}


console.log(saudacao);
console.log(exec());
console.log(cliente);
 
