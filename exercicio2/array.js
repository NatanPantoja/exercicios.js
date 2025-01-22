/*2. Soma de números no array
Crie um array com os números [10, 20, 30, 40, 50].
Calcule a soma de todos os números do array e exiba o resultado no console. */

const vendasDoDia = [10, 20, 30, 40, 50];

let total = 0; // tem que colocar o let com o total começando com o número 0

vendasDoDia.reduce((valorVenda) => {
    total = total + valorVenda;

})

console.log('A soma total é :', total);