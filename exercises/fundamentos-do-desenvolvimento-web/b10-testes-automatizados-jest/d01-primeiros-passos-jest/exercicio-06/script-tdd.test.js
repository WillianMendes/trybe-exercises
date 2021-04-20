const searchEmployee = require('./script-tdd.js');

describe('Testa a função searchEmployee', function () {
    it('Verifica se a função searchEmployee existe', function () {
        expect(typeof searchEmployee).toBe('function');
    });
});