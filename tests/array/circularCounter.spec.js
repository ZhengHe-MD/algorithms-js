const test = require('tape');
const josepheus = require('../../src/array/circularCounter');

test('circular counter test 1', t => {
  t.plan(1);
  const intArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const outputArr = josepheus(intArr, 3);
  t.deepEqual(outputArr, [3, 6, 9, 4, 8, 5, 2, 7, 1]);
});

test('circular counter test 2', t => {
  t.plan(1);
  const intArr = [1, 2, 3, 4, 5];
  const outputArr = josepheus(intArr, 1);
  t.deepEqual(outputArr, [1, 2, 3, 4, 5]);
});
