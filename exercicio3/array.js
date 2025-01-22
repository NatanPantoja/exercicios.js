/*3. Verificando se um valor existe no array
Crie um array com os seguintes elementos: ["maçã", "banana", "laranja", "uva"].
Peça para o usuário digitar uma fruta e verifique se ela está no array. Exiba uma mensagem indicando se a fruta foi encontrada ou não. */

//const frutas = ["maçã", "banana", "laranja", "uva"]; ERREI POIS SÓ FIZ A METADE DO CODIGO 

//console.log(frutas.includes('banana'));
//console.log(frutas.includes('pera'));

const frutas = ["maçã", "banana", "laranja", "uva"];

// Pedindo ao usuário para digitar o nome de uma fruta
const frutaDigitada = prompt("Digite o nome de uma fruta:").trim().toLowerCase();

// Verificando se a fruta está no array
if (frutas.includes(frutaDigitada)) {
    console.log(`A fruta "${frutaDigitada}" está na lista!`);
} else {
    console.log(`A fruta "${frutaDigitada}" não foi encontrada na lista.`);
}
