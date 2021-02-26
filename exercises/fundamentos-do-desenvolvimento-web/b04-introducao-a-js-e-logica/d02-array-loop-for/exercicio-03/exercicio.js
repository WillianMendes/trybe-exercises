console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 4 | Dia 2 .....');
console.log('......................................');
console.log('......................................');

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/**
 * Exercício 1
 * Nesse primeiro exercício, percorra o array imprimindo todos os valores nele
 * contidos com a função console.log() ;
 */
console.log('Exercício 1 --------------------------');
for (let index = 0; index < numbers.length; index+=1) {
  console.log('Numbers posição[' + index + ']: ' + numbers[index]);
}
console.log('......................................');

/**
 * Exercício 2
 * Para o segundo exercício, você deve somar todos os valores contidos no array
 * e imprimir o resultado;
 */
console.log('Exercício 2 --------------------------');
let sum = 0;
for (let index = 0; index < numbers.length; index+=1) {
  sum += numbers[index];
}
console.log('Soma de todos os itens do array: ' + sum);
console.log('......................................');

/**
 * Exercício 3
 * Para o terceiro exercício, calcule e imprima a média aritmética dos valores
 * contidos no array;
 *
 * Exercício 4
 * Com o mesmo código do exercício anterior, caso valor final seja maior que 20,
 * imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem:
 * "valor menor ou igual a 20";
 */
console.log('Exercício 3 e 4 --------------------------');
let media;
let sumForMedia = 0;
for (let index = 0; index < numbers.length; index+=1) {
  sumForMedia += numbers[index];
  media = sumForMedia / (numbers.length + 1);
}

if (media > 20) {
  console.log('INFO: valor maior que 20');
} else {
  console.log('INFO: valor menor ou igual a 20');
}

console.log('Media de todos os itens do array: ' + media);
console.log('......................................');

/**
 * Exercício 5
 * Utilizando for, descubra qual o maior valor contido no array e imprima-o;
 */
console.log('Exercício 5 --------------------------');
let higherNumber = 0;
for (let index = 0; index < numbers.length; index+=1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}
console.log('O maior numero do array: ' + higherNumber);
console.log('......................................');

/**
 * Exercício 6
 * Descubra quantos valores ímpares existem no array e imprima o resultado.
 * Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
 */
console.log('Exercício 6 --------------------------');
let countOdd = 0;
for (let index = 0; index < numbers.length; index+=1) {
  if (numbers[index] % 2 !== 0) {
    countOdd += 1;
  }
}

if (countOdd > 0) {
  console.log('Quantidade de números ímpares no array: ' + countOdd);
} else {
  console.log('Nenhum valor ímpar encontrado.');
}
console.log('......................................');

/**
 * Exercício 7
 * Utilizando for, descubra qual o menor valor contido no array e imprima-o;
 */
console.log('Exercício 7 --------------------------');
let lowestNumber;
for (let index = 0; index < numbers.length; index+=1) {
  if (numbers[index] < lowestNumber || lowestNumber === undefined) {
    lowestNumber = numbers[index];
  }
}
console.log('O menor numero do array: ' + lowestNumber);
console.log('......................................');

/**
 * Exercício 8
 * Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;
 */
console.log('Exercício 8 --------------------------');
let arrayNumber = [];
for (let index = 1; index <= 25; index+=1) {
  arrayNumber.push(index);
}
console.log('Array criado com um for: ' + arrayNumber);
console.log('......................................');

/**
 * Exercício 9
 * Utilizando o array criado no exercício anterior imprima o resultado da
 * divisão de cada um dos elementos por 2 .
 */
console.log('Exercício 9 --------------------------');
for (let index = 0; index < 25; index+=1) {
  console.log('Resultado de (' + arrayNumber[index] + ' / 2): ' + arrayNumber[index] / 2)
}
console.log('......................................' + "\n\n");

/**
 * Exercício 10
 * Ordene o array numbers em ordem crescente e imprima seus valores;
 */
console.log('Exercício 10 --------------------------');
for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      let position = numbers[i];

      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
console.log('Array ordenado (crescente): ' + numbers);
console.log('......................................');

/**
 * Exercício 11
 * Ordene o array numbers em ordem decrescente e imprima seus valores;
 */
console.log('Exercício 11 --------------------------');
for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] > numbers[j]) {
      let position = numbers[i];

      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
console.log('Array ordenado (decrescente): ' + numbers);
console.log('......................................');
