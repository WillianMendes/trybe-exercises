console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 5 | Dia 2 .....');
console.log('......................................');
console.log('......................................');

/**
 * Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da
 * tag body ;
 */
const title = document.createElement('h1');
title.innerText = 'Exercício 5.2 - JavaScript DOM';
document.getElementsByTagName('body')[0].appendChild(title);
