/*
 * 
 * Params
 *
 * Time: O()
 * Space: O()
 *
 */

// A and B represent cities, A[i] - B[i] represents an edge/road
// find out how many roads connect to city N
//
//     2      5
//   /      /
// 1      4
//   \      \
//     3      6
//
//     2      
//   /       
// 1   |    
//   \     
//     3 -- 4

// key: node

class Node {
  constructor(val) {
    this.val = val;
    this.connects = {};
  }
}

constructRoot = (root, A, B) => {
  for (let i = 0; i < A.length; i++) {
    if (!root.connects[A[i]]) root.connects[A[i]] = new Node(A[i]);
  }
  for (let i = 0; i < B.length; i++) {
    if (!root.connects[B[i]]) root.connects[B[i]] = new Node(B[i]);
  }
}

constructTree = (root, A, B) => {
  for (let i = 0; i < A.length; i++) {
    let nodeA = root.connects[A[i]];
    let nodeB = root.connects[B[i]];
    if (!nodeA.connects[B[i]]) nodeA.connects[B[i]] = nodeB;
    if (!nodeB.connects[A[i]]) nodeB.connects[A[i]] = nodeA;
  }
}

calculateRoads = (root, N) => {
  let res = 0;
  let myNode = root.connects[N];
  let searchedNodes = new Set();
  let queue = [myNode.val];

  while (queue.length > 0) {
    let curVal = queue[0];
    searchedNodes.add(curVal);
    for (let connect of Object.values(root.connects[curVal].connects)) {
      if (!searchedNodes.has(connect.val)) {
        queue.push(connect.val);
        res++;
      }
    }
    queue.shift();
  }
  
  return res;
}

const numRoads = function(A, B, N) {
  let root = new Node();
  constructRoot(root, A, B);
  constructTree(root, A, B);
  return calculateRoads(root, N);
};

console.log('Expected: 2' + '\n' + 'Output: ' + numRoads([1,1,4,4], [2,3,5,6], 6));
console.log('Expected: 4' + '\n' + 'Output: ' + numRoads([1,1,2,3], [2,3,3,4], 4));
