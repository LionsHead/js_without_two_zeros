/* global define, it, describe */

import assert from 'assert';
import withoutTwoZeros from './solution';

describe('withoutTwoZeros', () => {
  it('the base cases', () => {
    assert.equal(withoutTwoZeros(3, 1), 0);
    assert.equal(withoutTwoZeros(3, 2), 1);
    assert.equal(withoutTwoZeros(0, 0), 1);
  });
  it('should work', () => {
    assert.equal(withoutTwoZeros(1, 3), 4);
    assert.equal(withoutTwoZeros(2, 4), 10);
  });
});
