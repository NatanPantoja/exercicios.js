/*4. Concatenando arrays
Crie dois arrays:

Um com os números [1, 2, 3].
Outro com os números [4, 5, 6].
Una os dois arrays em um único array e exiba o resultado no console. */

//Para fazer a juntar dois array foi usado "concat(), igual do exemplo. antes do cancat colocar o nome da primeiro array.concat(array2), depois da console"
const coluna1 = [1, 2, 3];
const coluna2 = [4, 5, 6];

const colunasCombinados = coluna1.concat(coluna2);

console.log(colunasCombinados);