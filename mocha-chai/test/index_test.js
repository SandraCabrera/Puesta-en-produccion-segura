const assert = require('assert');
const Calculate = require('../index.js');

describe('Calculate', () => {
  describe('.sum', () => {
    it('returns the sum of an array of numbers', () => {
      const expectedResult = 6;
      const inputArray = [1, 2, 3];
      const result = Calculate.sum(inputArray);

      assert.equal(result, expectedResult);
    });
    it('returns the sum of a four item list', () => {
      const expectedResult = 10;
      const inputArray = [1, 2, 3, 4];
      const result = Calculate.sum(inputArray);

      assert.equal(result, expectedResult);
    });
  });
});