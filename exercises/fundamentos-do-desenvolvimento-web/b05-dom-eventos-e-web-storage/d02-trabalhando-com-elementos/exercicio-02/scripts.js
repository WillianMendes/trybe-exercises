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
divEx2.appendChild(divEx3);

/**
 * Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
 */
const pEx4 = document.createElement('p');
pEx4.innerText = 'Um texto qualquer';
divEx3.appendChild(pEx4);

/**
 * Adicione a tag div com a classe left-content como filho da tag div criada no
 * passo 2;
 */
const divEx5 = document.createElement('div');
divEx5.classList.add('left-content');
divEx2.appendChild(divEx5);

/**
 * Adicione a tag div com a classe right-content como filho da tag div criada no
 * passo 2;
 */
const divEx6 = document.createElement('div');
divEx6.classList.add('right-content');
divEx2.appendChild(divEx6);

/**
 * Adicione uma imagem com src configurado para o valor
 * https://picsum.photos/200 e classe small-image.
 * Esse elemento deve ser filho do div criado no passo 5;
 */
const imgEx7 = document.createElement('img');
imgEx7.setAttribute('src', 'https://picsum.photos/200');
divEx5.appendChild(imgEx7);
