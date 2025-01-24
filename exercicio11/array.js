/*1. Criando um array e acessando elementos
Crie um array com os números [10, 20, 30, 40, 50].
Exiba o primeiro e o último número no console. */

/* ERRE - Eu removi o primeiro e o ultimo numero, o certo era mostra.
const numeros = [10, 20, 30, 40, 50];
const primeroElemto = numeros.shift();
const ultimoElemento = numeros.pop();
console.log('Primerio número:', primeroElemto);
console.log('Ultimo número:', ultimoElemento);

 */

// Corretor a fazer era :


const numeros = [10, 20, 30, 40, 50];

// Acessando o primeiro e o último número diretamente
const primeiroElemento = numeros[0]; // O primeiro número está no índice 0
const ultimoElemento = numeros[numeros.length - 1]; // O último número está no índice comprimento - 1

console.log('Primeiro número:', primeiroElemento);
console.log('Último número:', ultimoElemento);

