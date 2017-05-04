const test = require("tape");
const Queue = require("../../src/data-structures/queue");

test("Queue: init with empty array", t => {
  t.plan(1);
  const q = new Queue();
  t.deepEqual(q.queue, []);
});

test("Queue: enqueue", t => {
  t.plan(1);
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  t.deepEqual(q.queue, [1, 2, 3, 4]);
});

test("Queue: dequeue", t => {
  t.plan(3);
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  t.deepEqual(q.queue, [1, 2]);
  const outlier = q.dequeue();
  t.deepEqual(outlier, 1);
  t.deepEqual(q.queue, [2]);
});

test("Queue: peek", t => {
  t.plan(2);
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  t.deepEqual(q.queue, [1, 2]);
  t.equal(q.peek(), 1);
});

test("Queue: length", t => {
  t.plan(2);
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  t.deepEqual(q.queue, [1, 2]);
  t.equal(q.length(), 2);
});

test("Queue: toString", t => {
  t.plan(2);
  const q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  t.deepEqual(q.queue, [1, 2, 3, 4]);
  t.equal(q.toString(), "1 - 2 - 3 - 4");
});
