const myRemoveWithoutCopy = require('./script');

describe('should myRemoveWithoutCopy', function () {
    it('should function return expected result', function () {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);

        const arrayTest = [1, 2, 3, 4];
        myRemoveWithoutCopy(arrayTest, 3)
        expect(arrayTest).toEqual(arrayTest);

        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});