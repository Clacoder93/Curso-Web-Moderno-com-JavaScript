console.log(typeof console);

//arredonda pra cima
console.log(Math.ceil(6.1));
//arredonda para o próximo inteiro
console.log(Math.round(6.1));

const obj1 = {}

obj1.nome = 'Bola'
//obj1['nome'] = 'Quadrado'

console.log(obj1.nome);

function Obj(nome){
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')     
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()




