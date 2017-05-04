// @flow

class Stack<T> {
  top: number;
  elements: Array<T>;

  constructor() {
    this.elements = [];
  }

  get length(): number {
    return this.elements.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  push(element: T): T {
    this.elements.push(element);
    return element;
  }

  pop(): T {
    return this.elements.pop();
  }

  peek(): T {
    return this.elements[this.length - 1];
  }
}

module.exports = Stack;
