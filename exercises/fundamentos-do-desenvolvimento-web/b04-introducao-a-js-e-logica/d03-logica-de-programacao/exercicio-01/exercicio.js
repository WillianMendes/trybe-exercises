console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 4 | Dia 3 .....');
console.log('......................................');
console.log('......................................');

/**
 * Exercício 1
 * Para o primeiro exercício de hoje, faça um programa que, dado um valor n
 * qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de
 * lado de tamanho n
 */
let n = 4;
let line = '';
for (let i = 0; i < n; i += 1) {
  line = '';
  for (let j = 0; j < n; j += 1) {
    line += '*';
  }
  console.log(line);
}
