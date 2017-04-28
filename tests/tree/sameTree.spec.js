const test = require('tape')
const sameTree = require('../../src/tree/sameTree')
const { buildBinaryTree } = require('../../src/tree/tree')

test('test 1', t => {
  t.plan(1)
  const treeTripples = [[4, 5, 6], 2, 3]
  const p = buildBinaryTree(treeTripples)
  const q = buildBinaryTree(treeTripples)
  t.ok(sameTree(p, q))
})
