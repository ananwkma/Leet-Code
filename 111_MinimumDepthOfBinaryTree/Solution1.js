/*
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 * @param {TreeNode} root
 * @return {number}
 *
 * Time: O(N)
 * Space: O(logN)
 */
var minDepth = function(root) {
    if (!root) return 0
    let min = Infinity
    dfs = (node, h) => {
    	if (!node) return
    	if (!node.left && !node.right) min = Math.min(min, h)
    	dfs(node.left, h+1)
    	dfs(node.right, h+1)
    }
    dfs(root, 1)
    return min
};
