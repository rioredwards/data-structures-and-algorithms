// -- Merge Two Sorted Lists
/*
 ** You are given the heads of two sorted linked lists list1 and list2.
 ** Merge the two lists in a one sorted list.
 ** The list should be made by splicing together the nodes of the first two lists.
 ** Return the head of the merged linked list.
 **
 ** Example 1:
 ** Input: list1 = [1,2,4], list2 = [1,3,4]
 ** Output: [1,1,2,3,4,4]
 **
 ** Example 2:
 ** Input: list1 = [], list2 = []
 ** Output: []
 **
 ** Example 3:
 ** Input: list1 = [], list2 = [0]
 ** Output: [0]
 **
 ** Constraints:
 ** The number of nodes in both lists is in the range [0, 50].
 ** -100 <= Node.val <= 100
 ** Both list1 and list2 are sorted in non-decreasing order.
 **
 */

import { singlyLinkedList } from "../linkedList.js";

const list1: singlyLinkedList<number> = new singlyLinkedList();
list1.push(1).push(2).push(4);
console.log("list1: ");
list1.print();
const list2: singlyLinkedList<number> = new singlyLinkedList();
list2.push(1).push(3).push(4);
console.log("list2: ");
list2.print();

const mergeTwoLists = (
  l1: singlyLinkedList<number>,
  l2: singlyLinkedList<number>
) => {
  const mergedList = new singlyLinkedList();
  let currNode1 = l1.head;
  let currNode2 = l2.head;
  while (currNode1 && currNode2) {
    if (currNode1.value < currNode2.value) {
      mergedList.push(currNode1.value);
      currNode1 = currNode1.next;
    } else {
      mergedList.push(currNode2.value);
      currNode2 = currNode2.next;
    }
  }
  while (currNode1) {
    mergedList.push(currNode1.value);
    currNode1 = currNode1.next;
  }
  while (currNode2) {
    mergedList.push(currNode2.value);
    currNode2 = currNode2.next;
  }
  return mergedList;
};

const mergedList = mergeTwoLists(list1, list2);
console.log("mergedList: ");
mergedList.print();
