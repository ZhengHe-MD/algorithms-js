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
  bst.add(3);
  bst.add(1);
  bst.add(2);
  bst.add(5);
  bst.add(6);
  bst.remove(2);
  bst.remove(5);
  t.equal(bst.root.left.right, null);
  t.equal(bst.root.right.right, null);
  t.equal(bst.root.right.value, 6);
});

test("BST getMin test", t => {
  t.plan(2);
  const bst = new BinarySearchTree();
  bst.add(3);
  bst.add(1);
  bst.add(2);
  bst.add(5);
  bst.add(6);
  const min = bst.getMin(bst.root.right);
  const max = bst.getMax(bst.root.left);
  t.equal(min, 5);
  t.equal(max, 2);
});

test("BST contains test", t => {
  t.plan(2);
  const bst = new BinarySearchTree();
  bst.add(3);
  bst.add(1);
  bst.add(2);
  bst.add(5);
  bst.add(6);
  t.equal(bst.contains(0), false);
  t.equal(bst.contains(6), true);
});

test("BST traverseDFS pre-order test", t => {
  t.plan(1);
  const bst = new BinarySearchTree();
  bst.add(5);
  bst.add(2);
  bst.add(1);
  bst.add(3);
  bst.add(7);
  bst.add(6);
  bst.add(8);
  const result = [];
  const fn = node => result.push(node.value);
  bst.traverseDFS(fn, "pre");
  t.deepEqual(result, [5, 2, 1, 3, 7, 6, 8]);
});

test("BST traverseDFS in-order test", t => {
  t.plan(1);
  const bst = new BinarySearchTree();
  bst.add(5);
  bst.add(2);
  bst.add(1);
  bst.add(3);
  bst.add(7);
  bst.add(6);
  bst.add(8);
  const result = [];
  const fn = node => result.push(node.value);
  bst.traverseDFS(fn, "in");
  t.deepEqual(result, [1, 2, 3, 5, 6, 7, 8]);
});

test("BST traverseDFS post-order test", t => {
  t.plan(1);
  const bst = new BinarySearchTree();
  bst.add(5);
  bst.add(2);
  bst.add(1);
  bst.add(3);
  bst.add(7);
  bst.add(6);
  bst.add(8);
  const result = [];
  const fn = node => result.push(node.value);
  bst.traverseDFS(fn, "post");
  t.deepEqual(result, [1, 3, 2, 6, 8, 7, 5]);
});

test("BST traverseBFS test", t => {
  t.plan(1);
  const bst = new BinarySearchTree();
  bst.add(5);
  bst.add(2);
  bst.add(1);
  bst.add(3);
  bst.add(7);
  bst.add(6);
  bst.add(8);
  const result = [];
  const fn = node => result.push(node.value);
  bst.traverseBFS(fn);
  t.deepEqual(result, [5, 2, 7, 1, 3, 6, 8]);
});

test("BST getHeight test 1", t => {
  t.plan(1);
  const bst = new BinarySearchTree();
  t.equal(bst.getHeight(bst.root), -1);
});

test("BST getHeight test 2", t => {
  t.plan(1);
  const bst = new BinarySearchTree();
  bst.add(1);
  t.equal(bst.getHeight(bst.root), 0);
});

test("BST getHeight test 3", t => {
  t.plan(1);
  const bst = new BinarySearchTree();
  bst.add(5);
  bst.add(2);
  bst.add(1);
  bst.add(3);
  bst.add(7);
  bst.add(6);
  bst.add(8);
  t.equal(bst.getHeight(bst.root), 2);
});

test("BST getHeight test 4", t => {
  t.plan(1);
  const bst = new BinarySearchTree();
  bst.add(1);
  bst.add(2);
  bst.add(3);
  bst.add(4);
  bst.add(5);
  t.equal(bst.getHeight(bst.root), 4);
});

test("BST isBalanced test 1", t => {
  t.plan(2);
  const bst = new BinarySearchTree();
  t.true(bst.isBalanced(bst.root));
  bst.add(1);
  t.true(bst.isBalanced(bst.root));
});

test("BST isBalanced test 2", t => {
  t.plan(1);
  const bst = new BinarySearchTree();
  bst.add(5);
  bst.add(2);
  bst.add(1);
  bst.add(3);
  bst.add(7);
  bst.add(6);
  bst.add(8);
  t.true(bst.isBalanced(bst.root));
});
