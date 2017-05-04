// @flow

class Queue<T> {
  queue: Array<T>;

  constructor() {
    this.queue = [];
  }

  enqueue(value: T) {
    this.queue.push(value);
  }

  dequeue(): T {
    return this.queue.shift();
  }

  peek(): T {
    return this.queue[0];
  }

  length(): number {
    return this.queue.length;
  }

  toString(): string {
    return this.queue.join(" - ");
  }
}

module.exports = Queue;
