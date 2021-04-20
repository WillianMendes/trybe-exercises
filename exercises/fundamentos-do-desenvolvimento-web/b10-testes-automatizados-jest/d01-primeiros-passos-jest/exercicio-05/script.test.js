const objs = require('./script');

describe('Compare dois objetos (JSON) para verificar se são idênticos ou não', function () {
    it('os dois objetos são iguais?', function () {
        expect(objs[0]).toEqual(objs[1]);
        expect(objs[0]).toEqual(objs[2]);
        expect(objs[1]).toEqual(objs[2]);
    });
});