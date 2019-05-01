/*
 *
 * Time: O(M + N)
 * Space: O(1)
 *
 */

// Given two singly linked lists that intersect at some point, 
// find the intersecting node. The lists are non-cyclical.

// For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, 
// return the node with value 8.

// In this example, assume nodes with the same value are the exact same node objects.

// Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.


// A = {1,3,5,7,9,11}
// B = {2,4,9,11}
//
// 1 3 5 7  9 11 2 4 9 11
//            ^
// 2 4 9 11 1 3  5 7 9 11
//       ^

compareLinkedLists = (list1, list2) => {
  if (!list1 || !list2) return null;
  while (list1 !== list2) {
    list1 = list1 ? list1.next : list2;
    list2 = list2 ? list2.next : list1;
  }
  return list1;
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
let listC = new Node(5);
let listC_2 = new Node(5);
let listC_3 = new Node(5);
listC.next = listC_2;
listC_2.next = listC_3;

console.log(compareLinkedLists(listA_1, listB_1));
console.log(compareLinkedLists(listAB_3, listC))
// console.log(listA_1)
