const assert = require('assert');

const greetPeople = (people) => {
    const greeting = 'Hello ';
    const peoplesGreeting = [];
    for (const person of people) {
        peoplesGreeting.push(greeting + person);
    }
    return peoplesGreeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof(greetPeople), 'function');
assert.deepStrictEqual(greetPeople(parameter), result);