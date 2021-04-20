const sum = require('./script.js');

describe('O calculo está correto?', function () {
    it('should sum two values', function () {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    });
    it('should if arguments it numbers', function () {
        const messageError = 'parameters must be numbers';
        expect(() => sum(4, '5')).toThrow(messageError);
    });
});