
const assert = require('assert');

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    return names.reduce((acc, currentValue) => {
        currentValue = currentValue.toLowerCase();
        while (currentValue.includes('a')) {
            acc += 1;
            currentValue.replace('a', '');
        }
    });
}

assert.deepStrictEqual(containsA(), 20);