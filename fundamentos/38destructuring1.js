// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'rua ABC',
        numero: 1000
    }
}
//console.log(nome);
const {nome, idade} = pessoa
console.log(nome);
const {nome: n, idade: i} = pessoa
console.log(n, idade);
const{endereco:{logradouro, numero, cep}} = pessoa

console.log(logradouro, numero, cep)


