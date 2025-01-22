/*4. Filtrando números pares
Crie um array com os números de 1 a 10.
Filtre apenas os números pares do array e exiba o novo array no console.
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares);

/*
filter(): O método cria um novo array com todos os elementos que atendem à condição fornecida.
A condição aqui é num % 2 === 0, ou seja, números divisíveis por 2 sem resto são pares.
num % 2 === 0: É a lógica que verifica se o número é par.
Resultado: Apenas os números pares são incluídos no array pares.
 */