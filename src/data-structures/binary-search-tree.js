// @flow

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

  traverseDFS(fn: Function, name: TraverseType = "pre") {
    const current = this.root;
    const nameToMethod = {
      pre: this._preOrder,
      in: this._inOrder,
      post: this._postOrder
    };
    nameToMethod[name](current, fn);
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
}

module.exports = {
  Node,
  BinarySearchTree
};
