
/*Claro! Aqui estão mais 5 exercícios de arrays para iniciantes em JavaScript:

1. Removendo elementos do array
Crie um array com os números [5, 10, 15, 20, 25].
Remova o primeiro e o último elemento do array e exiba o array atualizado no console.
*/

const numeros = [5, 10, 15, 20, 25];

const primeiro = numeros.shift(); // shift remove o primero item da lista do array.
const ultimo = numeros.pop();     // pop remove o ultimo item da lista do array.

console.log('Array atualizado:', numeros);

