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

const testNode = new ListNode(1);
console.log("testNode: ", testNode);

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

  print() {
    let currentNode = this.head;
    let output = "";
    while (currentNode) {
      output += currentNode.value;
      currentNode = currentNode.next;
    }
    console.log(output);
  }
}

const testListWithNode = new LinkedList(testNode);
console.log(testListWithNode.print());

const testListEmpty = new LinkedList();
console.log(testListEmpty.print());
