var numero =1
{
    /*
    let tem escopo mais restrito
    Escopo de bloco
    */
    let numero = 2
    console.log('dentro =', numero);   
}
console.log('fora =', numero)