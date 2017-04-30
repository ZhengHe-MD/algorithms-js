// @flow

function Node(value: number) {
  this.value = value;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

SinglyLinkedList.prototype.length = function(): number {
  return this.size;
};

SinglyLinkedList.prototype.addAtStart = function(value: number) {
  const node = new Node(value);
  this.head = node;
  this.tail = node;
  this.size++;
};

SinglyLinkedList.prototype.addAtEnd = function(value: number) {
  const node = new Node(value);
  this.tail.next = node;
  this.tail = node;
  this.size++;
};

SinglyLinkedList.prototype.addAfter = function(
  targetNode: Node,
  value: number
) {
  const node = new Node(value);
  node.next = targetNode.next;
  targetNode.next = node;
  this.size++;
};

SinglyLinkedList.prototype.nodeAtPosition = function(pos: number): Node {
  let node = this.head;
  if (pos >= this.size || pos < 0) {
    throw new Error("given position is out of bound");
  }
  while (pos > 0) {
    node = node.next;
    pos--;
  }
  return node;
};

SinglyLinkedList.prototype.add = function(value: number) {
  if (!this.head) {
    this.addAtStart(value);
  } else {
    this.addAtEnd(value);
  }
};

SinglyLinkedList.prototype.remove = function(value: number) {
  let previous = this.head;
  let current = this.head;
  while (current) {
    if (current.value === value) {
      if (current === this.head && current !== this.tail) {
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
};

SinglyLinkedList.prototype.insert = function(pos: number, value: number) {
  if (pos >= this.size || pos < 0) {
    throw new Error("given position is out of bound");
  }

  if (pos === 0) {
    this.addAtStart(value);
  } else {
    const prevNode = this.nodeAtPosition(pos - 1);
    this.addAfter(prevNode, value);
  }
};

SinglyLinkedList.prototype.reverse = function() {
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
};

SinglyLinkedList.prototype.toString = function(): string {
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
};

module.exports = SinglyLinkedList;
