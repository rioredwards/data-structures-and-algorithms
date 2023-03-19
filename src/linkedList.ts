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

  get(idx: number): ListNode<T> | null;
  set(idx: number, value: T): boolean;
  push(value: T): LinkedList<T>;
  pop(): ListNode<T> | null;
  shift(): ListNode<T> | null;
  unShift(value: T): LinkedList<T>;
  insert(idx: number, value: T): boolean;
  remove(idx: number): ListNode<T> | undefined;
  reverse(): LinkedList<T>;
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
    return currNode;
  }

  set(idx: number, value: T) {
    const targetNode = this.get(idx);
    if (!targetNode) return false;
    targetNode.value = value;
    return true;
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
    console.log(this.length);
    return this;
  }

  pop() {
    if (!this.head) return null;
    if (this.length === 1) {
      const returnNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return returnNode;
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
    return currNode;
  }

  shift() {
    if (!this.head) return null;
    if (this.length === 1) {
      const returnNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return returnNode;
    }
    const returnNode = this.head;
    this.head = this.head.next;
    this.length--;
    return returnNode;
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

  insert(idx: number, value: T) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unShift(value);
    if (idx === this.length) return !!this.push(value);

    const newNode = new ListNode(value);
    const lowerNodeConnect = this.get(idx - 1);
    const upperNodeConnect = lowerNodeConnect!.next;
    newNode.next = upperNodeConnect;
    lowerNodeConnect!.next = newNode;
    this.length++;
    return true;
  }

  remove(idx: number) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const lowerNodeConnect = this.get(idx - 1);
    const removedNode = lowerNodeConnect!.next;
    lowerNodeConnect!.next = removedNode!.next;
    return removedNode;
  }

  reverse() {
    let currNode = this.head;
    this.head = this.tail;
    this.tail = currNode;

    let prevNode: ListNode<T> | null = null;
    let nextNode: ListNode<T> | null = null;
    for (let i = 0; i < this.length; i++) {
      nextNode = currNode!.next;
      currNode!.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
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

const testList: LinkedList<string> = new LinkedList();
testList.push("Hello").push("my").push("name").push("is").push("Rio").print();
console.log("popping off:", testList.pop()?.value);
testList.print();
console.log("shifting off:", testList.shift()?.value);
testList.print();
console.log("unShifting: hello");
testList.unShift("hello");
testList.print();
console.log("getting value at index: 2: ", testList.get(2)?.value);
console.log("setting: Rio at testList.length - 1");
testList.set(testList.length - 1, "Rio");
testList.print();
testList.insert(3, "is");
testList.print();
testList.remove(0);
testList.print();

testList.reverse();
testList.print();
