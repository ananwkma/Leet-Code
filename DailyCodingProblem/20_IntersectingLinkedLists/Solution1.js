/*
 *
 * Time: O(M + N)
 * Space: O(N)
 *
 */

// Given two singly linked lists that intersect at some point, 
// find the intersecting node. The lists are non-cyclical.

// For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, 
// return the node with value 8.

// In this example, assume nodes with the same value are the exact same node objects.

// Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.


compareLinkedLists = (list1, list2) => {
  let s = new Set;
  while (list1 !== null) {
    s.add(list1.val);
    list1 = list1.next;
  }
  while (list2 !== null) {
    if (s.has(list2.val)) return list2; 
    list2 = list2.next;
  }
  return null;
}

class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

let listA_1 = new Node(3);
let listA_2 = new Node(7);
let listAB_3 = new Node(8);
let listAB_4 = new Node(10);
let listB_1 = new Node(99);
let listB_2 = new Node(1);
listA_1.next = listA_2;
listA_2.next = listAB_3;
listAB_3.next = listAB_4;
listB_1.next = listB_2;
listB_2.next = listAB_3;

console.log(compareLinkedLists(listA_1, listB_1));
// console.log(listA_1)
