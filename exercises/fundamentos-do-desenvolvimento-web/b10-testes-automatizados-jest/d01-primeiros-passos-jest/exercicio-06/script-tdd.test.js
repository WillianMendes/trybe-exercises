const searchEmployee = require('./script-tdd.js');

describe('Testa a função searchEmployee', function () {
    it('Verifica se a função searchEmployee existe', function () {
        expect(typeof searchEmployee).toBe('function');
    });
    it('Verifica se a função retorna ID não identificada quando o ID não consta no quadro de funcionários', function () {
        expect(searchEmployee('0000', ['firstName, lastName'])).toBe('ID não identificada');
    });
});