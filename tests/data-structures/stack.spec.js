const test = require("tape");
const Stack = require("../../src/data-structures/stack");

test("Stack push", t => {
  t.plan(1);
  const stack = new Stack();
  stack.push(0);
  stack.push(1);
  t.deepEqual(stack.elements, [0, 1]);
});

test("Stack pop", t => {
  t.plan(2);
  const stack = new Stack();
  stack.push(0);
  stack.push(1);
  const ele = stack.pop();
  t.equal(ele, 1);
  t.deepEqual(stack.elements, [0]);
});

test("Stack isEmpty", t => {
  t.plan(2);
  const stack = new Stack();
  t.true(stack.isEmpty());
  stack.push(0);
  t.false(stack.isEmpty());
});

test("Stack peek", t => {
  t.plan(1);
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  t.equal(stack.peek(), 2);
});
