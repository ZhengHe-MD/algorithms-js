// @flow
const Queue = require("./queue");

type TraverseType = "pre" | "in" | "post";

class Node {
  value: number;
  left: ?Node;
  right: ?Node;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: ?Node;

  constructor() {
    this.root = null;
  }

  add(value: number) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      let current = this.root;
      while (current) {
        if (node.value < current.value) {
          if (!current.left) {
            current.left = node;
            break;
          }
          current = current.left;
        } else if (node.value > current.value) {
          if (!current.right) {
            current.right = node;
            break;
          }
          current = current.right;
        } else {
          break;
        }
      }
    }
  }

  remove(value: number) {
    const getMin = this.getMin;
    const removeNode = function(node: ?Node, value: number): ?Node {
      if (!(node instanceof Node)) {
        return null;
      }
      if (value === node.value) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        const rightMax = getMin(node.right);
        node.value = rightMax;
        node.right = removeNode(node.right, rightMax);
        return node;
      } else if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else {
        node.right = removeNode(node.right, value);
        return node;
      }
    };
    this.root = removeNode(this.root, value);
  }

  contains(value: number): boolean {
    let current = this.root;
    while (current instanceof Node) {
      if (value === current.value) {
        return true;
      }
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  traverseBFS(fn: Function) {
    const q = new Queue();
    q.enqueue(this.root);
    while (q.length()) {
      const node = q.dequeue();
      fn(node);
      if (node instanceof Node) {
        if (node.left) {
          q.enqueue(node.left);
        }
        if (node.right) {
          q.enqueue(node.right);
        }
      }
    }
  }

  traverseDFS(fn: Function, type: TraverseType = "pre") {
    const current = this.root;
    // $FlowFixMe: https://github.com/facebook/flow/issues/2286
    this[`_${type}Order`](current, fn);
  }

  _preOrder(node: ?Node, fn: Function) {
    if (node instanceof Node) {
      fn(node);
      this._preOrder(node.left, fn);
      this._preOrder(node.right, fn);
    }
  }

  _inOrder(node: ?Node, fn: Function) {
    if (node instanceof Node) {
      this._inOrder(node.left, fn);
      fn(node);
      this._inOrder(node.right, fn);
    }
  }

  _postOrder(node: ?Node, fn: Function) {
    if (node instanceof Node) {
      this._postOrder(node.left, fn);
      this._postOrder(node.right, fn);
      fn(node);
    }
  }

  getMin(node: Node): number {
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  getMax(node: Node): number {
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }

  getHeight(node: ?Node): number {
    if (node instanceof Node) {
      const leftHeight = this.getHeight(node.left);
      const rightHeight = this.getHeight(node.right);
      return Math.max(leftHeight, rightHeight) + 1;
    } else {
      return -1;
    }
  }

  isBalanced(node: ?Node): boolean {
    if (node instanceof Node) {
      if (
        (node.left === null && node.right === null) ||
        (node.left instanceof Node && node.right instanceof Node)
      ) {
        return this.isBalanced(node.left) && this.isBalanced(node.right);
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
}

module.exports = {
  Node,
  BinarySearchTree
};
