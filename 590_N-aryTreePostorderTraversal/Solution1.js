/*
 * https://leetcode.com/problems/n-ary-tree-postorder-traversal/
 * 
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 *
 * @param {Node} root
 * @return {number[]}
 *
 * Time: O(N)
 * Space: O(logN)
 */

var postorder = function(root) {
    let newArr = []
    var dfs = function(node) {
        if (!node) return;
        for (let child of node.children) {
            dfs(child)
        }
        newArr.push(node.val)
    }
    dfs(root)
    return newArr
};
