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

  print() {
    let currentNode = this.head;
    let output = "";
    while (currentNode) {
      output += currentNode.value;
      currentNode = currentNode.next;
      if (currentNode) output += ", ";
    }
    console.log(output);
  }
}

const testList = new LinkedList();
testList.push(1).print();
testList.push(2).print();
testList.push("hello").print();
