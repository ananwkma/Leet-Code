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

// 1 -> 2 -> 3 -> 4 -> 5
//
// pass1: count = 5
// pass2: remove (count - n)
//          (count - n - 1).next = (count - n + 1)


checkAnswer = (head) => {
  let res = '';
  while (head) {
    res += (head.val+' ');
    head = head.next;
  }
  console.log(res)
}

var removeNthFromEnd = function(head, n) {
  let count = 0;
  let entry = new ListNode(0);
  entry.next = head;
  let node = entry.next;

  while (node) {
    node = node.next;
    count++;
  }

  let target = count - n;
  let idx = 0;
  node = entry.next;

  while (idx !== (target - 1)) {
    node = node.next;
    idx++;
  }
  node.next = node.next.next;

  checkAnswer(head);
  return head;
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

// console.log('Expected: 1,2,3,5' + '\n' + 'Output: ' + removeNthFromEnd(head, 2))
console.log('Expected: 1,2,4,5' + '\n' + 'Output: ' + removeNthFromEnd(head, 3))
