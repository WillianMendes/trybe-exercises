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
 * Exercício 8
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

/**
 * Exercício 9
 * Crie uma função que receba um array de nomes e retorne o nome com a maior
 * quantidade de caracteres.
 * Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
 * Valor esperado no retorno da função: Fernanda .
 */
console.log('Exercício 9 --------------------------');
function searchStringLargestCharacters (arrayNames) {
  let numberCharName = arrayNames[0].length;
  let nameLargest = arrayNames[0];
  for (let index = 0; index < arrayNames.length; index += 1) {
    if (arrayNames[index].length > numberCharName) {
      nameLargest = arrayNames[index];
      numberCharName = arrayNames[index].length;
    }
  }
  return nameLargest;
}
let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(searchStringLargestCharacters(names));
console.log('......................................');

/**
 * Exercício 10
 * Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
 * Array de teste: [2, 3, 2, 5, 8, 2, 3];
 * * Valor esperado no retorno da função: 2
 */
console.log('Exercício 10 -------------------------');
let mostRepeated = 0;
let countRepeated = 0;
function calculateMostRepeated(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let actualCountRepeated = 0;
    for (let j = 0; j < arrayNumbers.length; j += 1) {
      if (arrayNumbers[index] === arrayNumbers[j]) {
        actualCountRepeated += 1;
      }
    }
    if (actualCountRepeated > countRepeated) {
      mostRepeated = arrayNumbers[index];
      countRepeated = actualCountRepeated;
    }
  }
  return mostRepeated;
}
let arrayTest = [2, 3, 2, 5, 8, 2, 3];
console.log(calculateMostRepeated(arrayTest));
console.log('......................................');

/**
 * Exercício 11
 * Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
 * Valor de teste: N = 5 .
 * Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
 */
console.log('Exercício 11 -------------------------');
let sum = 0;
let sumString = '';
function calculateSum(number) {
  for (let index = 1; index <= number; index += 1) {
    sum += index;
    if (index === (number - 1)) {
      sumString += index;
    } else if (index === number) {
      sumString += '+' + index + '=' + sum;
    }  else {
      sumString += index + '+';
    }
  }
  return sumString;
}
console.log(calculateSum(5));
console.log('......................................');

/**
 * Exercício 12
 * Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
 * Valor de teste: "trybe" e "be"
 * Valor esperado no retorno da função: true
 * verificaFimPalavra("trybe", "be");
 * Retorno esperado: true
 * verificaFimPalavra("joaofernando", "fernan");
 * Retorno esperado: false
 */
console.log('Exercício 12 -------------------------');
function checkEndString(word, ending) {
  for (let index = word.length; index > word.length - 2; index -= 1) {
    if (word.substring(word.length - 2, word.length) === ending) {
      return true;
    }
  }
  return false;
}
console.log(checkEndString('joaofernando', 'fernan'));
console.log('......................................');
