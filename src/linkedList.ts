/* Linked List */

// -- List Node
interface ListNode<T> {
  value: T;
  next: ListNode<T> | null;
}

class ListNode<T> implements ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

// -- Linked List
interface LinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;
  insert(value: T): void;
  remove(value: T): void;
  print(): void;
}

class LinkedList<T> implements LinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;

  constructor(node: ListNode<T> | null = null) {
    this.head = node || null;
    this.tail = node || null;
    this.length = node ? 1 : 0;
  }

  get(idx: number) {
    if (idx < 0 || idx >= this.length) return null;
    let currNode = this.head;
    for (let i = 0; i < idx; i++) {
      currNode = currNode!.next;
    }
    return currNode!.value;
  }

  push(value: T) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;
    if (this.length === 1) {
      const returnVal = this.head.value;
      this.head = null;
      this.tail = null;
      this.length--;
      return returnVal;
    }
    let currNode = this.head;
    let prevNode = currNode;
    while (currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    this.tail = prevNode;
    this.tail.next = null;
    this.length--;
    return currNode.value;
  }

  shift() {
    if (!this.head) return null;
    if (this.length === 1) {
      const returnVal = this.head.value;
      this.head = null;
      this.tail = null;
      this.length--;
      return returnVal;
    }
    const returnVal = this.head.value;
    this.head = this.head.next;
    this.length--;
    return returnVal;
  }

  unShift(value: T) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  print() {
    let currNode = this.head;
    let output = "";
    while (currNode) {
      output += currNode.value;
      currNode = currNode.next;
      if (currNode) output += ", ";
    }
    console.log(output);
  }
}

const testList = new LinkedList();
testList.push(1).print();
testList.push(2).print();
testList.push("Hello").push("my").push("name").push("is").push("Rio").print();
console.log("popping off:", testList.pop());
testList.print();
console.log("shifting off:", testList.shift());
testList.print();
console.log("unShifting: hello");
testList.unShift("hello");
testList.print();

console.log("getting value at index: 2: ", testList.get(2));
console.log("getting value at index: 1: ", testList.get(1));
console.log("getting value at index: 0: ", testList.get(0));
console.log("getting value at index: -1: ", testList.get(-1));
console.log("getting value at index: 10: ", testList.get(10));
console.log(
  "getting value at index: testList.length: ",
  testList.get(testList.length)
);
console.log(
  "getting value at index: testList.length - 1: ",
  testList.get(testList.length - 1)
);
