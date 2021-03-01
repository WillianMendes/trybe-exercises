console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 4 | Dia 4 .....');
console.log('......................................');
console.log('......................................');

/**
 * Exercício 6
 * Crie uma função que receba uma string e retorne true se for um palíndromo,
 * ou false , se não for.
 * Exemplo de palíndromo: arara.
 * verificaPalindrome("arara");
 * Retorno esperado: true
 * verificaPalindrome("desenvolvimento");
 * Retorno esperado: false
 */
console.log('Exercício 6 --------------------------');
function reverseString(name) {
  let reverseName = '';
  for (let index = name.length; index >= 0; index -= 1) {
    reverseName += name.charAt(index);
  }
  return reverseName;
}

function checkIsPalindromo(name) {
  return name === reverseString(name);
}
console.log(checkIsPalindromo('arara'));
console.log('......................................');

/**
 * Exercício 7
 * Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
 * Array de teste: [2, 3, 6, 7, 10, 1]; .
 * Valor esperado no retorno da função: 4 .
 */
console.log('Exercício 7 --------------------------');
function returnIndexLargestValue (arrayInteger) {
  let keyLargestValue = 0;

  for (let index = 0; index < arrayInteger.length; index += 1) {
    if(arrayInteger[index] >= arrayInteger[keyLargestValue]) {
      arrayInteger[keyLargestValue] = arrayInteger[index];
      keyLargestValue = index;
    }
  }
  return keyLargestValue;
}
let numbers = [2, 3, 6, 7, 10, 1];
console.log(returnIndexLargestValue(numbers));
console.log('......................................');

/**
 * Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
 * Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
 * Valor esperado no retorno da função: 6 .
 */
console.log('Exercício 8 --------------------------');
function returnIndexSmallValue (arrayInteger) {
  let keySmallValue = 0;

  for (let index = 0; index < arrayInteger.length; index += 1) {
    if(arrayInteger[index] <= arrayInteger[keySmallValue]) {
      arrayInteger[keySmallValue] = arrayInteger[index];
      keySmallValue = index;
    }
  }
  return keySmallValue;
}
let numbers2 = [2, 4, 6, 7, 10, 0, -3];
console.log(returnIndexSmallValue(numbers2));
console.log('......................................');
