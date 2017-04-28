const test = require('tape')
const twoSum = require('../../src/array/twoSum')

test('test 1', t => {
  t.plan(1)
  const intArr = [2, 7, 11, 15]
  const target = 9
  const solution = twoSum(intArr, target)
  t.deepEqual(solution, [0, 1])
})
