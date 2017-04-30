const test = require('tape')
const { hasPathSum } = require('../../src/tree/pathSum')
const { buildBinaryTree } = require('../../src/tree/tree')

test('hasPathSum test 1', t => {
  t.plan(1)
  const treeTripples = [
    [[7, 2, 11], null, 4],
    [[13, [null, 1, 4], 8]],
    5
  ]
  const tree = buildBinaryTree(treeTripples)
  t.true(hasPathSum(tree, 22))
})
