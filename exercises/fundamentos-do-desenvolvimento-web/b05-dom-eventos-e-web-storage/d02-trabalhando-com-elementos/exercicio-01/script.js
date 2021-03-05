/**
 * Acesse o elemento elementoOndeVoceEsta.
 */
let elementBase = document.getElementById('elementoOndeVoceEsta');

/**
 * Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
 */
let fatherElement = elementBase.parentNode;
fatherElement.style.backgroundColor = 'red';

/**
 * Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
 */
let firstChildOfChild = elementBase.firstChild.nextSibling;
firstChildOfChild.textContent = 'Adicionei um texto';

/**
 * Acesse o primeiroFilho a partir de pai.
 */
let firstChild = fatherElement.firstChild.nextSibling;

/**
 * Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
 */
let firstChild2 = elementBase.previousElementSibling;

/**
 * Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
 */
let textWarning = elementBase.parentNode.innerText;

/**
 * Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
 */
let thirdChild = elementBase.nextElementSibling;

/**
 * Agora acesse o terceiroFilho a partir de pai.
 */
let thirdChild2 = fatherElement.firstElementChild.nextElementSibling.nextElementSibling;
