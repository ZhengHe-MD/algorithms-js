const test = require('tape')
const threeSum = require('../../src/array/threeSum')

test('test 1', t => {
  t.plan(1)
  const intArr = [-1, 0, 1, 2, -1, -4]
  const tripples = threeSum(intArr)
  t.deepEqual(tripples, [[-1, -1, 2], [-1, 0, 1]])
})
