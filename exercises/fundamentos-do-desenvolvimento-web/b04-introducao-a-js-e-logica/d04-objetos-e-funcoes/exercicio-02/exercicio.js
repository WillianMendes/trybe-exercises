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

