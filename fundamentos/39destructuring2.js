const [,a] = [10, 12, 14] //utilizando desctructuring para manipular array
console.log(a);

const[n1, ,n3, ,n5,n6=0] = [10,7,9,8]
console.log(n3);
console.log(n1,n3,n5,n6);

const [,[, nota]] = [[12,23,45],[11,44,53]]

console.log(nota);
