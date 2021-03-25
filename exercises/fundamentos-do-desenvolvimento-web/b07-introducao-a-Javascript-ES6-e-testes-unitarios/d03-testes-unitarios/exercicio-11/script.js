const assert = require('assert');

const removeVowels = (word) => {
    const characters = word.split('');
    let result = '';
    let count = 0;
    for (let index = 0; index < characters.length; index += 1) {
        if (
            characters[index] === 'a' ||
            characters[index] === 'o' ||
            characters[index] === 'i' ||
            characters[index] === 'e' ||
            characters[index] === 'u'
        ) {
            count += 1;
            result += count;
        } else {
            result += characters[index];
        }
    }
    return result;
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof(removeVowels), 'function');
assert.strictEqual(removeVowels(parameter), result);