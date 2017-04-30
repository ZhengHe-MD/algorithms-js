const test = require('tape');
const flatten = require('../../src/array/flatten');

test('flatten test 1', t => {
  t.plan(1);
  const nestedArr = [2, 1, [3, [4, 5], 6], 7, [8]];
  const flatArr = flatten(nestedArr);
  t.deepEqual(flatArr, [2, 1, 3, 4, 5, 6, 7, 8]);
});
