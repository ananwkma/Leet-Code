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
 * Space: O(N)
 *
 */

// traverse entire tree in sorted order
// push into arr and get kth element

var kthSmallest = function(root, k) {
  let res = [];
  dfs = (node) => {
    if(!node) return;
    if(!node.left && !node.right) return res.push(node.val);
    dfs(node.left);
    res.push(node.val)
    dfs(node.right);
  }
  dfs(root);
  return res[k-1];
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