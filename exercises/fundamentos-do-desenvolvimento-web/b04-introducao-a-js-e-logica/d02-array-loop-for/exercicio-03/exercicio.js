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
