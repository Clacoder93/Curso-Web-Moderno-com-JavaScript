function tratarErroELancar(erro) {
    //throw new Error('This is a fckng error')
    throw 'This is a fcking error'
    /* throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
     
    } 
    */

}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        tratarErroELancar(error)
    }
    finally {
        console.log('Acabou, FIM');
    }

}
const obj = { name: 'Lino' }
imprimirNomeGritado(obj)

