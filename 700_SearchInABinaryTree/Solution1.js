/*
 * https://leetcode.com/problems/search-in-a-binary-search-tree/
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
 * Time: O()
 * Space: O()
 */
var searchBST = function(root, val) {
    if (!root) return null
    if (root.val === val) return root
    if (root.val > val) return searchBST(root.left, val)
    if (root.val < val) return searchBST(root.right, val)
}

console.log('Expected: [2,1,3]' + '\n' + 'Output: ' + searchBST([4,2,7,1,3],2))
console.log('Expected: [2,1,3]' + '\n' + 'Output: ' + searchBST([4,2,7,1,3],5))
console.log('Expected: [2,1,3]' + '\n' + 'Output: ' + searchBST([40,20,60,10,30,50,70],20))
