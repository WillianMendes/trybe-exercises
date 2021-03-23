console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 7 | Dia 1 .....');
console.log('......................................');
console.log('......................................');

/**
 * Crie uma página que contenha:
 * Um botão ao qual será associado um event listener ;
 * Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
 * Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
 */
let clickCount = 0;
let countSpan = document.getElementById('count');
let button = document.getElementById('button-action');

button.addEventListener('click', clickAction => {
   clickCount += 1;
   countSpan.innerText = clickCount;
});