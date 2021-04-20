const myRemove = require('./script');

describe('should function myRemove return array expected', function () {
    it('should array return', function () {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
});