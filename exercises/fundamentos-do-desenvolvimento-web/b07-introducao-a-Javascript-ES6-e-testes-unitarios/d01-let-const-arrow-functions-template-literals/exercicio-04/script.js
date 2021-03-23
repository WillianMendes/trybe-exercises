console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 7 | Dia 1 .....');
console.log('......................................');
console.log('......................................');

/**
 * Crie uma função que receba uma frase e retorne qual a maior palavra.
 */
const longestWord = phrase => {
    let biggestWord = '';
    const words = phrase.split(' ');
    for (let i = 0; i < words.length; i += 1) {
        if (words[i].length > biggestWord.length) {
            biggestWord = words[i];
        }
    }
    return biggestWord;
}
longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');