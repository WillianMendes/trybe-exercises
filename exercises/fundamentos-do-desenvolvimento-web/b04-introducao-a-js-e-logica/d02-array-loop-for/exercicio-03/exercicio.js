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
 */
console.log('Exercício 3 --------------------------');
let media;
let sumForMedia = 0;
for (let index = 0; index < numbers.length; index+=1) {
  sumForMedia += numbers[index];
  media = sumForMedia / (numbers.length + 1);
}
console.log('Media de todos os itens do array: ' + media);
console.log('......................................');
