/*
 * https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
 *
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/*
 * @param {Node} root
 * @return {number}
 *
 * Time: O(N)
 * Space: O(logN)
 */
var maxDepth = function(root) {
    let result = 0
    dfs = (node, depth) => {
        if (!node) return;
        result = Math.max(result, depth)
        for (let child of node.children) {
            dfs(child, depth+1)
        }
    }
    dfs(root, 1)
    return result
};
