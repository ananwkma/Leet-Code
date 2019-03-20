/*
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 *
 * Time: O(N)
 * Space: O(1)
 *
 */

// traverse entire tree in sorted order
// keep track of count until k return val


var kthSmallest = function(root, k) {
  let count = 0;
  let value = 0;

  dfs = (node) => {
    if(!node) return;
    if(!node.left && !node.right) return (++count === k) ? (value = node.val) : null;
    dfs(node.left);
    if(++count === k) value = node.val;
    dfs(node.right);
  }
  dfs(root);
  return value;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let node3 = new TreeNode(3);
let node1 = new TreeNode(1);
let node4 = new TreeNode(4);
let node2 = new TreeNode(2);
node3.left = node1;
node3.right = node4;
node1.right = node2;

console.log('Expected: 1' + '\n' + 'Output: ' + kthSmallest(node3,1))