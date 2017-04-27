const test = require('tape')
const longestNonRepeat = require('../../src/array/longestNonRepeat')

test('test 1', t => {
  t.plan(1)
  const inputStr = 'abcabcdefbb'
  const maxLen = longestNonRepeat(inputStr)
  t.equal(maxLen, 6)
})

test('test 2', t => {
  t.plan(1)
  const inputStr = 'abcabcbb'
  const maxLen = longestNonRepeat(inputStr)
  t.equal(maxLen, 3)
})

test('test 3', t => {
  t.plan(1)
  const inputStr = 'bbbbb'
  const maxLen = longestNonRepeat(inputStr)
  t.equal(maxLen, 1)
})

test('test 4', t => {
  t.plan(1)
  const inputStr = 'pwwkew'
  const maxLen = longestNonRepeat(inputStr)
  t.equal(maxLen, 3)
})
