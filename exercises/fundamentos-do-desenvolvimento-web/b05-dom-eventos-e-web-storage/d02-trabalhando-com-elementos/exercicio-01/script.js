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

/***********************************
 ************* PARTE 2 *************
 ***********************************/

/**
 * Crie um irmão para elementoOndeVoceEsta.
 */
let brotherElementBase = document.createElement('div');
brotherElementBase.id = 'brother';
fatherElement.append(brotherElementBase);

/**
 * Crie um filho para elementoOndeVoceEsta.
 */
let childElementBase = document.createElement('div');
childElementBase.id = 'childElementBase';
elementBase.append(childElementBase);

/**
 * Crie um filho para primeiroFilhoDoFilho.
 */
let childOfFirstChildOfChild = document.createElement('div');
childOfFirstChildOfChild.id = 'childOfFirstChildOfChild';
firstChildOfChild.append(childOfFirstChildOfChild);

/**
 * A partir desse filho criado, acesse terceiroFilho.
 */
let childOfFirstChildOfChild2 = firstChildOfChild.firstElementChild;

/***********************************
 ************* PARTE 3 *************
 ***********************************/

/**
 * Remova todos os elementos da página, menos pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
 */
let fatherOfFather = document.getElementById('paiDoPai');
for (let children of fatherOfFather.children) {
  for (let children2 of children.children) {
    if (children2.id !== 'pai' && children2.id !== 'elementoOndeVoceEsta' && children2.id !== 'primeiroFilhoDoFilho') {
      children.removeChild(children2);
    }
  }
  if (children.id !== 'pai' && children.id !== 'elementoOndeVoceEsta' && children.id !== 'primeiroFilhoDoFilho') {
    fatherOfFather.removeChild(children);
  }
}
