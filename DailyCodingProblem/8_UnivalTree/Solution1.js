/*
 *
 * Time: O()
 * Space: O()
 *
 */

// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

// Given the root to a binary tree, count the number of unival subtrees.

// For example, the following tree has 5 unival subtrees:

//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  1   1

var univalTree = function(root) {
  console.log(root)
  let res = 0;
  dfs = (node) => {
    if (!node.left && !node.right) return res++;
    if ((node.left && node.right) && (node.left.val === node.right.val)) res++;
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }
  dfs(root)
  return res;
};

function Node(val) {
  this.val = val;
  this.left = this.right = null;
};

let root = new Node(0);
let left = new Node(1);
let right = new Node(0);
let rightleft = new Node(1);
let rightleftleft = new Node(1);
let rightleftright = new Node(1);
let rightright = new Node(0);

root.left = left;
root.right = right;
right.left = rightleft;
right.right = rightright;
rightleft.left = rightleftleft;
rightleft.right = rightleftright;

console.log('Expected: 5' + '\n' + 'Output: ' + univalTree(root));
