console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 4 | Dia 3 .....');
console.log('......................................');
console.log('......................................');

/**
 * Exercício 4
 * Depois, faça uma pirâmide com n asteriscos de base
 */
let n = 100;
let asteriskCount = 0;
let spaceCount = 0;
let asterisk = '';
let space = '';
let print = '';

for (let i = 1; i <= n; i += 1) {

  asterisk = '';
  space = '';
  print = '';
  asteriskCount = 0;
  spaceCount = 0;

  for (let j = 0; j < i; j += 1) {
    asteriskCount += 1;
    asterisk += '*';
  }

  spaceCount = (n - asteriskCount) / 2;
  for (let k = 0; k < spaceCount; k += 1) {
    space += ' ';
  }

  print += space + asterisk;
  if (asteriskCount % 2 !== 0) {
    console.log(print);
  }

}
