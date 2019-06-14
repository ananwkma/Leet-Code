/*
 * 
 * Params
 *
 * Time: O(N^2)
 * Space: O(N)
 *
 */

const numRoads = function(A, B, N) {
  let visitedIdx = new Set();
  let checkedNodes = new Set();
  let queue = [ N ];
  let count = 0; 

  while (queue.length > 0) {
    for (let i = 0; i < A.length; i++) {
      if (visitedIdx.size === A.length) break;

      if (A[i] === queue[0] && !visitedIdx.has(i)) {
        count++;
        visitedIdx.add(i);
        if (!checkedNodes.has(B[i])) queue.push(B[i]);
      }

      else if (B[i] === queue[0] && !visitedIdx.has(i)) {
        count++;
        visitedIdx.add(i);
        if (!checkedNodes.has(A[i])) queue.push(A[i]);
      }

    }
    checkedNodes.add(queue[0])
    queue.shift();
  }
  return count;
};

console.log('Expected: 2' + '\n' + 'Output: ' + numRoads([1,1,4,4], [2,3,5,6], 6));
console.log('Expected: 4' + '\n' + 'Output: ' + numRoads([1,1,2,3], [2,3,3,4], 4));
