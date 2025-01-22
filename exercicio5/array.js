/*Crie um array com as letras: ["a", "b", "c", "d", "e"].
Reverta a ordem dos elementos do array e, em seguida, transforme-o em uma única string separada por hífen ("-").
Por exemplo, o resultado deve ser: "e-d-c-b-a". */
// JOIN uni elemento a um string, mas acrescenta como no exemplo a baixo.
// REVERSE o nome já diz ele faz o array de tras para frente do console.
const alfabeto = ["a", "b", "c", "d", "e"];
const resultado = alfabeto.reverse().join('-');

console.log(resultado);
