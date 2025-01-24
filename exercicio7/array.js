/*2. Multiplicando elementos
Crie um array com os números [2, 4, 6, 8, 10].
Crie um novo array onde cada número é o dobro do valor original e exiba o resultado no console.
 */

const numeros = [2, 4, 6, 8, 10];

const resultadoEmDobro = numeros.map((numero) => {
    return numero * 2;
})

console.log('Resultado:', resultadoEmDobro);