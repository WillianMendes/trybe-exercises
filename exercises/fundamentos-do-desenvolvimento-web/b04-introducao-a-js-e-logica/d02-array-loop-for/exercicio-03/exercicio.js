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
 * Para o segundo exercício, você deve somar todos os valores contidos no array
 * e imprimir o resultado;
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
