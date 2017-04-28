// @flow

class BinaryTreeNode {
  val: number
  left: ?BinaryTreeNode
  right: ?BinaryTreeNode

  constructor (val: number) {
    this.val = val
    this.left = null
    this.right = null
  }
}

type NestedTreeNodeTripple = [number | NestedTreeNodeTripple, number | NestedTreeNodeTripple, number]

function buildBinaryTree (nestedTripple: NestedTreeNodeTripple): BinaryTreeNode {
  const root = new BinaryTreeNode(nestedTripple[2])
  if (typeof(nestedTripple[0]) === 'number') {
    root.left = new BinaryTreeNode(nestedTripple[0])
  } else {
    root.left = buildBinaryTree(nestedTripple[0])
  }

  if (typeof(nestedTripple[1]) === 'number') {
    root.right = new BinaryTreeNode(nestedTripple[1])
  } else {
    root.right = buildBinaryTree(nestedTripple[1])
  }

  return root
}

module.exports = {
  BinaryTreeNode,
  buildBinaryTree
}
