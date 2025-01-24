/*5. Substituindo um elemento do array
Crie um array com os números [3, 6, 9, 12, 15].
Substitua o número na posição 2 (índice 1) pelo número 8.
Exiba o array atualizado no console.
 */

/* ERREI(porquê usei um metodo que não tem no js nativo para arrays, o certo seria ter usado )
const lista = [3, 6, 9, 12, 15];

const novaLista = lista.with(2, '8');
console.log('Lista atualizada', novaLista);
*/

// Para alterar um valor em uma posição específica, basta usar a notação array[indice] = novoValor.

// o certo seria assim 

const lista = [3, 6, 9, 12, 15];

lista[1] = 8;

console.log(lista);