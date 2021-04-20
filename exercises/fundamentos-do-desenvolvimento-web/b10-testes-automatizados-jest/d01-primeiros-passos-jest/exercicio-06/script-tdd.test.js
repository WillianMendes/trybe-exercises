const searchEmployee = require('./script-tdd.js');

describe('Testa a função searchEmployee', function () {
    it('Verifica se a função searchEmployee existe', function () {
        expect(typeof searchEmployee).toBe('function');
    });
    it('Verifica se a função retorna ID não identificada quando o ID não consta no quadro de funcionários', function () {
        expect(searchEmployee('0000', ['firstName, lastName'])).toBe('ID não identificada');
    });
    it('Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível"', function () {
        expect(searchEmployee('8579-6', ['firstName, lastName, motherName'])).toBe('Informação indisponível');
    });
    it('Verifica se retorna apenas as informações consultadas pelo argumento detail', function () {
        expect(searchEmployee('8579-6', ['firstName', 'lastName'])).toEqual(
            {'firstName': 'Ana', 'lastName': 'Gates'}
        );
        expect(searchEmployee('8579-6', ['id', 'specialities'])).toEqual(
            {id: '8579-6', specialities: ['UX', 'Design']}
        );
        expect(searchEmployee('8579-6', ['firstName'])).toEqual(
            {'firstName': 'Ana'}
        );
    });
});