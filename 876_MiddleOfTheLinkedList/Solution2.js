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
	let fast = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        head = head.next
    }
    return head
};
