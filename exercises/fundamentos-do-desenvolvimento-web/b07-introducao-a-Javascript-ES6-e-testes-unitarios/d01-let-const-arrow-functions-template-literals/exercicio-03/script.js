console.log('......................................');
console.log('......................................');
console.log('..... Módulo 1 | Bloco 7 | Dia 1 .....');
console.log('......................................');
console.log('......................................');

/**
 * Crie uma função que receba um número e retorne seu fatorial.
 */
const factorial = number => {
    let result = number;
    while (number !== 1) {
        result *= (number - 1);
        number -= 1;
    }
    return result;
}

console.log(factorial(4));