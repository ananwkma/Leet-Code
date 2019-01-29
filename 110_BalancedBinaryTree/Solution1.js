/*
 * https://leetcode.com/problems/balanced-binary-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 * @param {TreeNode} root
 * @return {boolean}
 *
 * Time: O(N^2)
 * Space: O(H) (height of the tree)
 */
sizeTree = (node, h) => {
    if (node === null) return h
    return Math.max(sizeTree(node.left, h+1), sizeTree(node.right, h+1))
}

var isBalanced = function(root) {
    dfs = (node) => {
        if (node === null) return true
        let hLeft = sizeTree(node.left, 0)
        let hRight = sizeTree(node.right, 0)
        if (Math.abs(hLeft - hRight) > 1) return false
        return (dfs(node.left) && dfs(node.right))
    }
    return dfs(root)
};
