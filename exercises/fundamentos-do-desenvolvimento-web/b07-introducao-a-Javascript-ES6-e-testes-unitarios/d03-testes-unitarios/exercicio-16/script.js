const assert = require('assert');

function removeMiddle(words) {
    const middle = Math.round(words.length / 2) - 1;
    const wordMiddle = [];
    wordMiddle.push(words[middle]);
    words.splice(middle, middle - 1);
    return wordMiddle;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);