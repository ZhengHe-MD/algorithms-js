const test = require("tape");
const {
  Node,
  BinarySearchTree
} = require("../../src/data-structures/binary-search-tree");

test("BST add test", t => {
  t.plan(4);
  const bst = new BinarySearchTree();
  bst.add(1);
  bst.add(3);
  bst.add(5);
  bst.add(0);
  t.equal(bst.root.value, 1);
  t.equal(bst.root.left.value, 0);
  t.equal(bst.root.right.value, 3);
  t.equal(bst.root.right.right.value, 5);
});

test("BST remove test 1", t => {
  t.plan(1);
  const bst = new BinarySearchTree();
  bst.root = new Node(3);
  bst.remove(3);
  t.equal(bst.root, null);
});

test("BST remove test 2", t => {
  t.plan(1);
  const bst = new BinarySearchTree();
  bst.remove(3);
  t.equal(bst.root, null);
});

test("BST remove test 3", t => {
  t.plan(3);
  const bst = new BinarySearchTree();
  bst.root = new Node(3);
  bst.root.left = new Node(1);
  bst.root.left.right = new Node(2);
  bst.root.right = new Node(5);
  bst.root.right.right = new Node(6);
  bst.remove(2);
  bst.remove(5);
  t.equal(bst.root.left.right, null);
  t.equal(bst.root.right.right, null);
  t.equal(bst.root.right.value, 6);
});

test("BST getMin test", t => {
  t.plan(2);
  const bst = new BinarySearchTree();
  bst.root = new Node(3);
  bst.root.left = new Node(1);
  bst.root.left.right = new Node(2);
  bst.root.right = new Node(5);
  bst.root.right.right = new Node(6);
  const min = bst.getMin(bst.root.right);
  const max = bst.getMax(bst.root.left);
  t.equal(min, 5);
  t.equal(max, 2);
});

test("BST contains test", t => {
  t.plan(2);
  const bst = new BinarySearchTree();
  bst.root = new Node(3);
  bst.root.left = new Node(1);
  bst.root.left.right = new Node(2);
  bst.root.right = new Node(5);
  bst.root.right.right = new Node(6);
  t.equal(bst.contains(0), false);
  t.equal(bst.contains(6), true);
});
