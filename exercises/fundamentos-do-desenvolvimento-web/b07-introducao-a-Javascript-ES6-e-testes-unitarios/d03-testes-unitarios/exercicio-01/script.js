const assert = require('assert');

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
    }

    return a + b;
}

assert.strictEqual(sum(1, 1), 2);
assert.strictEqual(sum('a', 2), Error);