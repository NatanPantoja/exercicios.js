// Exemplos e explicações dos métodos de array

// 1. at() - Retorna o elemento em um índice específico
const frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas.at(1)); // Retorna: 'banana'
console.log(frutas.at(-1)); // Retorna: 'laranja' (último elemento)

// 2. concat() - Combina dois ou mais arrays
const array1 = [1, 2];
const array2 = [3, 4];
const arraysCombinados = array1.concat(array2);
console.log(arraysCombinados); // Retorna: [1, 2, 3, 4]

// 3. constructor - Retorna a função que criou o objeto Array
console.log(frutas.constructor); // Retorna: [Function: Array]

// 4. copyWithin() - Copia parte de um array para outra posição no mesmo array
const numeros = [1, 2, 3, 4, 5];
numeros.copyWithin(0, 3); // Copia elementos a partir do índice 3 para o índice 0
console.log(numeros); // Retorna: [4, 5, 3, 4, 5]

// 5. entries() - Retorna um objeto iterador com pares chave/valor
const cores = ['vermelho', 'verde', 'azul'];
const iterador = cores.entries();
for (let [indice, valor] of iterador) {
    console.log(`${indice}: ${valor}`);
}
// Retorna:
// 0: vermelho
// 1: verde
// 2: azul

// 6. every() - Verifica se todos os elementos atendem a uma condição
const idades = [18, 19, 20, 21];
const todosMaiores = idades.every(idade => idade >= 18);
console.log(todosMaiores); // Retorna: true

// 7. fill() - Preenche elementos do array com um valor
const array = [1, 2, 3, 4];
array.fill(0, 1, 3); // Preenche com 0 do índice 1 ao 2
console.log(array); // Retorna: [1, 0, 0, 4]

// 8. filter() - Cria um novo array com elementos que passam em um teste
const numeros2 = [1, 2, 3, 4, 5, 6];
const pares = numeros2.filter(num => num % 2 === 0);
console.log(pares); // Retorna: [2, 4, 6]

// 9. find() - Retorna o primeiro elemento que satisfaz uma condição
const usuarios = [{ nome: 'João', idade: 20 }, { nome: 'Maria', idade: 25 }];
const usuario = usuarios.find(user => user.idade > 21);
console.log(usuario); // Retorna: {nome: 'Maria', idade: 25}

// 10. findIndex() - Retorna o índice do primeiro elemento que satisfaz uma condição
const indice = usuarios.findIndex(user => user.nome === 'Maria');
console.log(indice); // Retorna: 1

// 11. findLast() - Retorna o último elemento que satisfaz uma condição
const numeros3 = [1, 2, 3, 4, 5];
const ultimoPar = numeros3.findLast(num => num % 2 === 0);
console.log(ultimoPar); // Retorna: 4

// 12. findLastIndex() - Retorna o índice do último elemento que satisfaz uma condição
const ultimoIndice = numeros3.findLastIndex(num => num % 2 === 0);
console.log(ultimoIndice); // Retorna: 3

// 13. flat() - Achata arrays aninhados
const arrayAninhado = [1, [2, 3], [4, [5, 6]]];
console.log(arrayAninhado.flat(2)); // Retorna: [1, 2, 3, 4, 5, 6]

// 14. flatMap() - Mapeia e depois achata o resultado
const palavras = ['olá mundo', 'javascript é legal'];
const letras = palavras.flatMap(palavra => palavra.split(' '));
console.log(letras); // Retorna: ['olá', 'mundo', 'javascript', 'é', 'legal']

// 15. forEach() - Executa uma função para cada elemento
const numeros4 = [1, 2, 3];
numeros4.forEach(num => console.log(num * 2));
// Retorna:
// 2
// 4
// 6

// 16. includes() - Verifica se um array contém um elemento específico
const frutas2 = ['maçã', 'banana', 'laranja'];
console.log(frutas2.includes('banana')); // Retorna: true

// 17. indexOf() - Retorna o primeiro índice de um elemento
console.log(frutas2.indexOf('banana')); // Retorna: 1

// 18. join() - Une elementos do array em uma string
const palavras2 = ['Olá', 'mundo'];
console.log(palavras2.join(' ')); // Retorna: "Olá mundo"

// 19. keys() - Retorna um iterador com as chaves do array
const iteradorChaves = frutas2.keys();
for (let chave of iteradorChaves) {
    console.log(chave);
}
// Retorna:
// 0
// 1
// 2

// 20. lastIndexOf() - Retorna o último índice de um elemento
const numeros5 = [1, 2, 3, 2, 1];
console.log(numeros5.lastIndexOf(2)); // Retorna: 3

// 21. map() - Cria um novo array com os resultados de uma função
const numeros6 = [1, 2, 3];
const dobrados = numeros6.map(num => num * 2);
console.log(dobrados); // Retorna: [2, 4, 6]

// 22. pop() - Remove o último elemento do array
const frutas3 = ['maçã', 'banana', 'laranja'];
const ultimaFruta = frutas3.pop();
console.log(ultimaFruta); // Retorna: 'laranja'
console.log(frutas3); // Retorna: ['maçã', 'banana']

// 23. push() - Adiciona elementos ao final do array
frutas3.push('uva');
console.log(frutas3); // Retorna: ['maçã', 'banana', 'uva']

// 24. reduce() - Reduz o array a um único valor
const numeros7 = [1, 2, 3, 4];
const soma = numeros7.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma); // Retorna: 10

// 25. reduceRight() - Como reduce(), mas da direita para a esquerda
const letras2 = ['a', 'b', 'c'];
const concatenado = letras2.reduceRight((acc, curr) => acc + curr);
console.log(concatenado); // Retorna: 'cba'

// 26. reverse() - Inverte a ordem dos elementos
const numeros8 = [1, 2, 3];
console.log(numeros8.reverse()); // Retorna: [3, 2, 1]

// 27. shift() - Remove o primeiro elemento do array
const frutas4 = ['maçã', 'banana', 'laranja'];
const primeira = frutas4.shift();
console.log(primeira); // Retorna: 'maçã'
console.log(frutas4); // Retorna: ['banana', 'laranja']

// 28. slice() - Retorna uma parte do array
const frutas5 = ['maçã', 'banana', 'laranja', 'uva'];
console.log(frutas5.slice(1, 3)); // Retorna: ['banana', 'laranja']

// 29. some() - Verifica se pelo menos um elemento satisfaz uma condição
const numeros9 = [1, 2, 3, 4, 5];
const temPar = numeros9.some(num => num % 2 === 0);
console.log(temPar); // Retorna: true

// 30. sort() - Ordena os elementos do array
const frutas6 = ['banana', 'maçã', 'laranja'];
console.log(frutas6.sort()); // Retorna: ['banana', 'laranja', 'maçã']

// 31. splice() - Adiciona/remove elementos do array
const frutas7 = ['maçã', 'banana', 'laranja'];
frutas7.splice(1, 1, 'uva'); // Remove 1 elemento a partir do índice 1 e adiciona 'uva'
console.log(frutas7); // Retorna: ['maçã', 'uva', 'laranja']

// 32. toLocaleString() - Converte array para string localizada
const numero = 1234.56;
console.log(numero.toLocaleString('pt-BR')); // Retorna: "1.234,56"

// 33. toString() - Converte array para string
const frutas8 = ['maçã', 'banana', 'laranja'];
console.log(frutas8.toString()); // Retorna: "maçã,banana,laranja"

// 34. unshift() - Adiciona elementos no início do array
const frutas9 = ['banana', 'laranja'];
frutas9.unshift('maçã');
console.log(frutas9); // Retorna: ['maçã', 'banana', 'laranja']

// 35. values() - Retorna um iterador com os valores do array
const iteradorValores = frutas9.values();
for (let valor of iteradorValores) {
    console.log(valor);
}
// Retorna:
// maçã
// banana
// laranja

// Exemplos e explicações dos métodos especiais de Array

// 1. with() - Método que retorna uma cópia do array com um elemento modificado em um índice específico
// Observação: Este é um método relativamente novo do JavaScript
const fruta = ['maçã', 'banana', 'laranja'];
const novasFrutas = fruta.with(1, 'morango'); // Modifica o índice 1
console.log(novasFrutas); // ['maçã', 'morango', 'laranja']
console.log(frutas); // Original permanece: ['maçã', 'banana', 'laranja']

// 2. Symbol(Symbol.iterator) - Permite que o array seja iterável
const numeros10 = [1, 2, 3];
const iteradorW = numeros10[Symbol.iterator]();

console.log(iterador.next()); // { value: 1, done: false }
console.log(iterador.next()); // { value: 2, done: false }
console.log(iterador.next()); // { value: 3, done: false }
console.log(iterador.next()); // { value: undefined, done: true }

// Exemplo prático usando for...of (que usa o iterator internamente)
for (const numero of numeros) {
    console.log(numero);
}

// 3. Symbol(Symbol.unscopables) - Define quais propriedades NÃO devem ser incluídas 
// em um escopo with (raramente usado)
const unscopables = Array.prototype[Symbol.unscopables];
console.log(unscopables);
// Retorna um objeto com propriedades que não devem ser incluídas:
// {
//   copyWithin: true,
//   entries: true,
//   fill: true,
//   find: true,
//   findIndex: true,
//   includes: true,
//   keys: true,
//   values: true
// }

// Exemplo prático dos métodos em conjunto
const lista = ['a', 'b', 'c', 'd'];

// Usando with() para modificar um elemento
const novaLista = lista.with(2, 'x');
console.log('Lista com elemento modificado:', novaLista); // ['a', 'b', 'x', 'd']

// Usando iterator para percorrer
console.log('\nPercorrendo com iterator:');
for (const item of lista) {
    console.log(item);
}

// Exemplo de uso real
class CarrinhoDeCompras {
    constructor() {
        this.items = ['Maçã', 'Banana', 'Laranja'];
    }

    // Usando Symbol.iterator para tornar o carrinho iterável
    [Symbol.iterator]() {
        return this.items[Symbol.iterator]();
    }

    // Método para substituir um item
    substituirItem(indice, novoItem) {
        this.items = this.items.with(indice, novoItem);
        return this.items;
    }
}

const carrinho = new CarrinhoDeCompras();

// Iterando sobre o carrinho
console.log('\nItens no carrinho:');
for (const item of carrinho) {
    console.log(item);
}

// Substituindo um item
console.log('\nSubstituindo Banana por Morango:');
carrinho.substituirItem(1, 'Morango');
for (const item of carrinho) {
    console.log(item);
}