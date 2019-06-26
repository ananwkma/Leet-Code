/*
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * Time: O(N)
 * Space: O(1)
 *
 */

// n = 2
// 1 -> 2 -> 3 -> 4 -> 5
// ^              ^
//           ^             ^
//
// pass1: 2 pointers n+1 apart
//        when ptr2 reaches null, ptr1.next = ptr.next.next


checkAnswer = (head) => {
  let res = '';
  while (head) {
    res += (head.val+' ');
    head = head.next;
  }
  console.log('test',res)
}

var removeNthFromEnd = function(head, n) {
  let entry = new ListNode(0);
  entry.next = head;
  let ptr1 = entry;
  let ptr2 = entry;

    
  for (let i = 1; i <= n + 1; i++) {
    ptr2 = ptr2.next;
  }
    
  while (ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  
  ptr1.next = ptr1.next.next;

  checkAnswer(entry.next);
  return entry.next;
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

let head = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
head.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let head2 = new ListNode(1);

// console.log('Expected: 1,2,3,5' + '\n' + 'Output: ' + removeNthFromEnd(head, 2))
console.log('Expected: 1,2,4,5' + '\n' + 'Output: ' + removeNthFromEnd(head, 3))
console.log('Expected: null' + '\n' + 'Output: ' + removeNthFromEnd(head2, 1))
