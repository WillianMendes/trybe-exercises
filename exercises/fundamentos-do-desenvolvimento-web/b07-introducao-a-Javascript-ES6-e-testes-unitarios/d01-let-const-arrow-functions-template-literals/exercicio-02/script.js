console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 7 | Dia 1 .....');
console.log('......................................');
console.log('......................................');

/**
 * Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
 * Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se
 * encontram ordenados de forma crescente!".
 * Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().
 * Spoiler: É possível realizar uma função que ordene qualquer array de números.
 */
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const arrayOrder = numbers => {
    let phraseNumbers = 'Os números ';
    for (let i = 0; i < numbers.length; i += 1) {
        for (let j = 0; j < numbers.length - i - 1; j += 1) {
            if (numbers[j + 1] < numbers[j]) {
                [numbers[j + 1], numbers[j]] = [numbers[j], numbers[j + 1]];
            }
        }
    }
    for (let i = 0; i < numbers.length; i += 1) {
        phraseNumbers += `${numbers[i]}, `
        if (i === numbers.length) {
            phraseNumbers += `se encontram ordenados de forma crescente!`;
        }
    }
    return phraseNumbers;
}

console.log(arrayOrder(oddsAndEvens));
