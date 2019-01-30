/*
 * https://leetcode.com/problems/middle-of-the-linked-list/
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {ListNode} head
 * @return {ListNode}
 *
 * Time: O(N)
 * Space: O(1)
 */
var middleNode = function(head) {
	let size = 0
    for (let node = head; node !== null; node = node.next) {
    	size++
    }
    for (let i = 0; i < size/2; i++) {
    	if (i === Math.floor(size/2)) break
    	head = head.next
    }
    return head
};
