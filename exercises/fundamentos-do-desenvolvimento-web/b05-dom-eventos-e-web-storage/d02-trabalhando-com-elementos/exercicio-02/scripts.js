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
imgEx7.classList.add('small-image');
divEx5.appendChild(imgEx7);

/**
 * Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como
 * valores da lista. Essa lista deve ser filha do div criado no passo 6;
 */
const ulEx8 = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');
const li5 = document.createElement('li');
const li6 = document.createElement('li');
const li7 = document.createElement('li');
const li8 = document.createElement('li');
const li9 = document.createElement('li');
const li10 = document.createElement('li');
li1.innerText = 'Um';
li2.innerText = 'Dois';
li3.innerText = 'Tres';
li4.innerText = 'Quatro';
li5.innerText = 'Cinco';
li6.innerText = 'Seis';
li7.innerText = 'Sete';
li8.innerText = 'Oito';
li9.innerText = 'Nove';
li10.innerText = 'Dez';
divEx6.appendChild(ulEx8);
ulEx8.appendChild(li1);
ulEx8.appendChild(li2);
ulEx8.appendChild(li3);
ulEx8.appendChild(li4);
ulEx8.appendChild(li5);
ulEx8.appendChild(li6);
ulEx8.appendChild(li7);
ulEx8.appendChild(li8);
ulEx8.appendChild(li9);
ulEx8.appendChild(li10);

/**
 * Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
 */
const h3Ex91 = document.createElement('h3');
const h3Ex92 = document.createElement('h3');
const h3Ex93 = document.createElement('h3');
divEx2.appendChild(h3Ex91);
divEx2.appendChild(h3Ex92);
divEx2.appendChild(h3Ex93);

/**
 * Adicione a classe title na tag h1 criada;
 */
title.classList.add('title');

/**
 * Adicione a classe description nas 3 tags h3 criadas;
 */
const h3Result = document.getElementsByTagName('h3');
for (let i = 0; i < h3Result.length; i += 1) {
  h3Result[i].classList.add('description');
}

/**
 * Remova o div criado no passo 5 (aquele que possui a classe left-content ).
 * Utilize a função .removeChild() ;
 */
divEx2.removeChild(divEx5);
