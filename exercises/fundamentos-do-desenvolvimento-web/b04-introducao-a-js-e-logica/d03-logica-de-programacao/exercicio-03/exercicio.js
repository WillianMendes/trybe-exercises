console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 4 | Dia 3 .....');
console.log('......................................');
console.log('......................................');

/**
 * Exercício 3
 * Agora inverta o lado do triângulo.
 */
let n = 5;
let line = '';
for (let i = n; i > 0; i -= 1) {
  line = '';
  for (let j = 0; j < i; j += 1) {
    line += '*';
  }
  console.log(line);
}
