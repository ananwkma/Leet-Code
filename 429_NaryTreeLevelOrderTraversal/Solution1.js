/*
 * Link
 * 
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * @param {Node} root
 * @return {number[][]}
 *
 * Time: O()
 * Space: O()
 *
 */

// BFS
// when new layer, push into array

var levelOrder = function(root) {
  let res = [];
  if (root === null) return res;
  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let layer = [];
    const len = queue.length
    for (let i = 0; i < len; i++) {
      layer.push(queue[0].val);
      if (queue[0].children) queue.push(...queue[0].children);
      queue.shift();
    }
    res.push(layer);
  }

  return res;
};
