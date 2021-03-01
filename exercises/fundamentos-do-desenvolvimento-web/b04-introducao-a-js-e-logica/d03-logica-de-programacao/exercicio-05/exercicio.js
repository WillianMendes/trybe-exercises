console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 4 | Dia 3 .....');
console.log('......................................');
console.log('......................................');

/**
 * Exercício 5
 * Faça uma pirâmide com n asteriscos de base que seja vazia no meio.
 */
let n = 10;
let spaceCount = 0;
let asterisk = '';
let space = '';

for (let i = 1; i <= n; i += 1) {

  asterisk = '';
  space = '';
  spaceCount = 0;

  for (let j = 0; j < i; j += 1) {
    if (j === 0 || j === (i - 1)) {
      asterisk += '*';
    } else {
      asterisk += ' ';
    }
  }

  spaceCount = (n - asterisk.length) / 2;
  for (let k = 0; k < spaceCount; k += 1) {
    space += ' ';
  }

  if (asterisk.length % 2 !== 0) {
    console.log(space + asterisk);
  }

}
