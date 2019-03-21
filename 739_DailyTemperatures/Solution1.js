/*
* https://leetcode.com/problems/daily-temperatures/
* 
* @param {number[]} T
* @return {number[]}
*
* Time: O(N^2)
* Space: O(N)
*
*/

// 73 74 75 71 69 72 76 73
// 1  1  4  2  1  1  0  0
// 
// double for loop
// compare ith element with next elements until greater element, push idx difference into array

var dailyTemperatures = function(T) {
  let res = [];
  for (let i = 0; i < T.length; i++) {
    for (let j = i+1; j < T.length; j++) {
      if (T[j] > T[i]) {
        res.push(j-i);
        break;
      }
      if (j === T.length - 1) {
        res.push(0);
      }
    }
  }
  res.push(0);
  return res;
};

console.log('Expected: [1, 1, 4, 2, 1, 1, 0, 0]' + '\n' + 'Output: ' + dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
