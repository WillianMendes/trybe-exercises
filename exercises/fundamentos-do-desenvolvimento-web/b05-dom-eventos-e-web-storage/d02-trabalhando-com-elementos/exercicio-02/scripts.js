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

/**
 * Adicione a tag div com a classe main-content como filho da tag body ;
 */
const divEx2 = document.createElement('div');
divEx2.classList.add('main-content');
document.getElementsByTagName('body')[0].appendChild(divEx2);

/**
 * Adicione a tag div com a classe center-content como filho da tag div criada
 * no passo 2;
 */
const divEx3 = document.createElement('div');
divEx3.classList.add('center-content');
document.getElementsByClassName('main-content')[0].appendChild(divEx3);
