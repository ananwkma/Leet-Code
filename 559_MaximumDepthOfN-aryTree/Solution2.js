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
 * Time: O()
 * Space: O()
 */

// BFS 

var maxDepth = function(root) {
  if (!root) return 0;
  let res = 0;
  let queue = [];
  let layer = 1;
  queue.push(root);
  while(queue.length) {
    for(let i = 0; i < layer; i++) {
      let node = queue[0];
      queue.shift();
      queue.push(...node.children);
    }
    layer = queue.length;
    res++;
  }
  return res;
};
