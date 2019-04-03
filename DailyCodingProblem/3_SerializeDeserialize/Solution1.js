/*
 *
 * Time: O()
 * Space: O()
 *
 */

// Given the root to a binary tree, implement serialize(root), 
// which serializes the tree into a string, and deserialize, 
// which deserializes the string back into the tree.

function Node (val) {
  this.val = val;
  this.left = this.right = null;
}

var serialize = function(N) {
  let str = "";
  dfs = (node) => {
    if (!node) return;
    if (!str) str += ("Node('" + node.val + "'")
    else str += (" Node('" + node.val + "'")
    if (node.left) str += ","
    dfs(node.left);
    if (node.right) str += ","
    dfs(node.right);
    str += ")";
  }
  dfs(N);
  return str;
};

var deserialize = function(str) {
  let splitStr = str.split('Node');
  let balance = 0;
  let stack = [];

  for (let i = 0; i < splitStr.length; i++) {
    let curStr = splitStr[i].trim();

    if (curStr) {
      let node = new Node();
      node.val = curStr.substring(2, curStr.indexOf("'",2));

      let top = stack[stack.length-1];
      if (top && !top.left) top.left = node;
      else if (top && !top.right) top.right = node;
      balance++;

      // count ')' to figure out where in the tree we are
      for (let j = 0; ; j++) {
        if (curStr[curStr.length-1-j] === ')') balance--;
        else if (curStr[curStr.length-1-j] === ',') continue;
        else break; 
      }

      // adjust stack to match where we are in tree
      while (stack.length > balance) {
        if (balance === 0 && stack.length === 1) return(stack[0]);
        stack.pop();
      }

      stack.push(node);
    }
  }
};

let root = new Node('root');
let left = new Node('left');
let right = new Node('right');
let leftleft = new Node('left.left');
root.left = left;
left.left = leftleft;
root.right = right;

let str2 = serialize(root);
console.log("ser", str2);
let root2 = deserialize(str2);
console.log("des", root2)

// node = Node('root', Node('left', Node('left.left')), Node('right'))
// assert deserialize(serialize(node)).left.left.val == 'left.left'

//    root
//   /    \
// left   right
//  /
// leftleft

// serialize dfs: root, left, leftleft, right 
// deserialize bfs: root (left leflleft) (right)
