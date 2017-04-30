const test = require("tape");
const SinglyLinkedList = require("../../src/data-structures/singly-linked-list");

test("SinglyLinkedList constructor test", t => {
  t.plan(3);
  const linkedList = new SinglyLinkedList();
  t.equal(linkedList.head, null);
  t.equal(linkedList.tail, null);
  t.equal(linkedList.size, 0);
});

test("SinglyLinkedList add test", t => {
  t.plan(4);
  const linkedList = new SinglyLinkedList();
  linkedList.add(1);
  t.equal(linkedList.head.value, 1);
  t.equal(linkedList.tail.value, 1);
  linkedList.add(2);
  t.equal(linkedList.tail.value, 2);
  t.equal(linkedList.size, 2);
});

test("SinglyLinkedList remove test 1: head", t => {
  t.plan(3);
  const linkedList = new SinglyLinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.remove(1);
  t.equal(linkedList.size, 1);
  t.equal(linkedList.head.value, 2);
  t.equal(linkedList.tail.value, 2);
});

test("SinglyLinkedList remove test 2: tail", t => {
  t.plan(3);
  const linkedList = new SinglyLinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.remove(2);
  t.equal(linkedList.size, 1);
  t.equal(linkedList.head.value, 1);
  t.equal(linkedList.tail.value, 1);
});

test("SinglyLinkedList remove test 3: middle", t => {
  t.plan(3);
  const linkedList = new SinglyLinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.remove(2);
  t.equal(linkedList.head.value, 1);
  t.equal(linkedList.tail.value, 3);
  t.equal(linkedList.size, 2);
});

test("SinglyLinkedList remove test 4: last one", t => {
  t.plan(3);
  const linkedList = new SinglyLinkedList();
  linkedList.add(1);
  linkedList.remove(1);
  t.equal(linkedList.head, null);
  t.equal(linkedList.tail, null);
  t.equal(linkedList.size, 0);
});

test("SinglyLinkedList remove test 5: remove multiple", t => {
  t.plan(3);
  const linkedList = new SinglyLinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.remove(2);
  t.equal(linkedList.head.value, 1);
  t.equal(linkedList.tail.value, 3);
  t.equal(linkedList.size, 2);
});

test("SinglyLinkedList insert test 1: at start", t => {
  t.plan(2);
  const linkedList = new SinglyLinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.insert(0, 0);
  t.equal(linkedList.head.value, 0);
  t.equal(linkedList.size, 3);
});

test("SinglyLinkedList nodeAtPosition test", t => {
  t.plan(2);
  const linkedList = new SinglyLinkedList();
  linkedList.add(1);
  linkedList.add(2);
  const nodeAt0 = linkedList.nodeAtPosition(0);
  const nodeAt1 = linkedList.nodeAtPosition(1);
  t.deepEqual(nodeAt0, linkedList.head);
  t.deepEqual(nodeAt1, linkedList.tail);
});

test("SinglyLinkedList insert test 2: after start", t => {
  t.plan(1);
  const linkedList = new SinglyLinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.insert(1, 3);
  const nodeAt1 = linkedList.nodeAtPosition(1);
  t.equal(nodeAt1.value, 3);
});

test("SinglyLinkedList toString test", t => {
  t.plan(1);
  const linkedList = new SinglyLinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  t.equal(linkedList.toString(), "head => 1 => 2 => 3 => null");
});

test("SinglyLinkedList toString test: empty list", t => {
  t.plan(1);
  const linkedList = new SinglyLinkedList();
  t.equal(linkedList.toString(), "");
});

test("SinglyLinkedList reverse test", t => {
  t.plan(2);
  const linkedList = new SinglyLinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.reverse();
  t.equal(linkedList.head.value, 3);
  t.equal(linkedList.tail.value, 1);
});
