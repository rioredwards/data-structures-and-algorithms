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
    if (!this.head) return undefined;
    let currNode = this.head;
    let prevNode = currNode;
    while (currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    this.tail = prevNode;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currNode;
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
testList.push("hello").print();
console.log("popping off:", testList.pop()?.value);
testList.print();
console.log("popping off all:");
while (testList.length > 0) {
  console.log(testList.pop()?.value);
}
console.log(testList);
