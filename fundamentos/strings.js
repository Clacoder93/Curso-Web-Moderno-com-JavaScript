const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //teste de cartere nulo
console.log(escola.charCodeAt(3)) //verifica código unicode na posição
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,4))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola '.concat(escola.substring(1)).concat("!"))
console.log('Escola ' + escola +"!")
console.log('3'+2)
console.log(escola.replace(3, 'e'))
console.log('Ana,Maria,Pedro')
console.log('Ana,Maria,Pedro'.split(','))
