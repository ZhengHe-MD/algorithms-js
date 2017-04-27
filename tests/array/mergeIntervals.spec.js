const test = require('tape')
const mergeIntervals = require('../../src/array/mergeIntervals')

test('test 1', t => {
  t.plan(1)
  const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
  const mergedIntervals = mergeIntervals(intervals)
  t.deepEqual(mergedIntervals, [[1, 6], [8, 10], [15, 18]])
})

test('test 2', t => {
  t.plan(1)
  const intervals = [[1, 3], [3, 6], [8, 10], [11, 15]]
  const mergedIntervals = mergeIntervals(intervals)
  t.deepEqual(mergedIntervals, [[1, 6], [8, 10], [11, 15]])
})
