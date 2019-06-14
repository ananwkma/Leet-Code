/*
 * https://www.geeksforgeeks.org/minimum-number-deletions-make-sorted-sequence/
 * 
 * Params
 *
 * Time: O(N^2)
 * Space: O(H)
 *
 */

// check every subsequence
// [1,2,3,4]
// 1
// 2
// 3
// 4
// 1,2
// 1,3
// 1,4
// 1,2,3
// 1,2,4
// 1,3,4
// 2,3
// 2,4
// 2,3,4
// 3,4

const minDeletionsForSorted = function(N) {
  let res = N.length;


  dfs = (i, progress) => {
    if (i >= N.length) {
      if (N.length - progress.length < res) {
        res = N.length - progress.length;
      }
      return;
    }
    if (N[i] > progress[progress.length-1]) {
      progress.push(N[i]);
    } 
    dfs (i+1, progress);
  }

  for (let i = 0; i < N.length; i++) {
    dfs (i+1, [N[i]]);
  }

  return res;
};

console.log('Expected: 2' + '\n' + 'Output: ' + minDeletionsForSorted([5, 6, 1, 7, 4]))
// remove 1 and 4 to get sorted [5,6,7]
console.log('Expected: 0' + '\n' + 'Output: ' + minDeletionsForSorted([1,2,3,4]))
