/*
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * 
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(N^2)
 * Space: O(N)
 *
 */

// [ 10, 9, 2, 8, 3, 7, 101, 18 ]
//   1   1  1  1  1  1  1    1        10
//   1   1  1  1  1  1  1    1        9 
//   1   1  1  1  1  1  1    1        2
//   1   1  1  2  1  1  1    1        8
//   1   1  1  2  2  1  1    1        3
//   1   1  1  2  2  3  1    1        7
//   1   1  1  2  2  3  4    1        101
//   1   1  1  2  2  3  4    4        18
//
//   search all before current, if greater -> +1 

const lengthOfLIS = function(arr) {
  let lis = [];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let curLIS = 1;
    let curVal = arr[i];
    for (let j = 0; j < i; j++) {
      if (curVal > arr[j]) {
        if (lis[j] >= curLIS) {
          curLIS = lis[j] + 1;
        }
      }
    }
    lis.push(curLIS);
    if (curLIS > max) max = curLIS;
  }
  return max;
}

console.log('Expected: 4' + '\n' + 'Output: ' + lengthOfLIS([10,9,2,8,3,7,101,18]))
// [2,3,7,101]
