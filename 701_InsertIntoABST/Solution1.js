/*
 * https://leetcode.com/problems/insert-into-a-binary-search-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 *
 * Time: O(N)
 * Space: O(H)
 *
 */

// 4		5 > 4 (right)
// 7		5 < 7 (left)
// null		insert 5

var insertIntoBST = function(root, val) {
  dfs = (node) => {
  	if (node.val > val) {
  		if (node.left === null) {
  			let newNode = new TreeNode(val);
  			return node.left = newNode;
  		}
  		else dfs(node.left);
  	}
  	else if (node.val < val) {
  		if (node.right === null) {
  			let newNode = new TreeNode(val);
  			return node.right = newNode;
  		}
  		else dfs(node.right);
  	}
  }
  dfs(root);
  return root;
};
