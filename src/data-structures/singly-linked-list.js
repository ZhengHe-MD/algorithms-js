// @flow

class Node {
  value: number;
  next: ?Node;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: ?Node;
  tail: ?Node;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  length(): number {
    return this.size;
  }

  addAtStart(value: number) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.size++;
  }

  addAtEnd(value: number) {
    if (this.tail instanceof Node) {
      const node = new Node(value);
      this.tail.next = node;
      this.tail = node;
      this.size++;
    } else {
      this.addAtStart(value);
    }
  }

  addAfter(targetNode: Node, value: number) {
    const node = new Node(value);
    node.next = targetNode.next;
    targetNode.next = node;
    this.size++;
  }

  nodeAtPosition(pos: number): ?Node {
    let node = this.head;
    if (pos >= this.size || pos < 0 || !(node instanceof Node)) {
      return null;
    }

    if (node instanceof Node) {
      while (pos > 0 && node.next) {
        node = node.next;
        pos--;
      }
      return node;
    }
  }

  add(value: number) {
    if (!this.head) {
      this.addAtStart(value);
    } else {
      this.addAtEnd(value);
    }
  }

  remove(value: number) {
    if (!(this.head instanceof Node)) {
      return;
    }
    let previous = this.head;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        if (current === this.head && current !== this.tail) {
          // $FlowFixMe: suppressing this error until we can refactor
          this.head = this.head.next;
        }
        if (current !== this.head && current === this.tail) {
          this.tail = previous;
        }
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        }
        previous.next = current.next;
        this.size--;
      } else {
        previous = current;
      }
      current = current.next;
    }
  }

  insert(pos: number, value: number) {
    if (pos >= this.size || pos < 0) {
      throw new Error("given position is out of bound");
    }

    if (pos === 0) {
      this.addAtStart(value);
    } else {
      const prevNode = this.nodeAtPosition(pos - 1);
      if (prevNode instanceof Node) {
        this.addAfter(prevNode, value);
      }
    }
  }

  reverse() {
    let prevNode = null;
    let currNode = this.head;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;
  }

  toString(): string {
    if (!this.head) {
      return "";
    }

    let node = this.head;
    let values = ["head", node.value];
    while (node.next) {
      node = node.next;
      values.push(node.value.toString());
    }
    values.push("null");
    return values.join(" => ");
  }
}

module.exports = SinglyLinkedList;
