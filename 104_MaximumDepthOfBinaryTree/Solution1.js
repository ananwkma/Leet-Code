/*
 * Link
 * 
 * Params
 *
 * Time: O()
 * Space: O()
 *
 */

// Recursion
// if empty, depth = 0
// if leaf, depth = 1
// increment depth as you move down tree
// compare depth to max

var maxDepth = function(root) {
    let max = 0
    dfs = (node, depth) => {
    	if (node.left === null && node.right === null) {
    		if (depth > max) max = depth
    	}
    	if (node.left) dfs(node.left, depth+1)
    	if (node.right) dfs(node.right, depth+1)
    }
	if (!root) return 0
	dfs(root, 1)
    return max
};

console.log('Expected: ' + '\n' + 'Output: ' + maxDepth())
