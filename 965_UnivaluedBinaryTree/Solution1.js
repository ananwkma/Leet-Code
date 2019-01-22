/*
 * https://leetcode.com/problems/univalued-binary-tree/
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
 *
 * Time: O(N)
 * Space: O(H)
 */

var isUnivalTree = function(root) {
    if (!root) return true
    if (root.right && root.val !== root.right.val) return false
    if (root.left && root.val !== root.left.val) return false
    return (isUnivalTree(root.right) && isUnivalTree(root.left))
};
