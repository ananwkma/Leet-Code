/*
 *
 * Time: O(N^2)
 * Space: O(H)
 *
 */

// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. 
// Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. 

// [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

// 2
//  26
//   265
//  22
//  25
// 4
//  42
//  45
// 6
//  65
// 2
// 5



var largestSum = function(arr) {
  let largest = -Infinity;

  dfs = (sum, idx) => {
    if (sum > largest) largest = sum;
    if (arr[idx+2]) checkAll(sum, idx+2);
    else return;
  }

  checkAll = (sum, idx) => {
    for (let i = idx; i < arr.length; i++) {
      dfs (sum+arr[i], i);
    }
  }

  checkAll(0, 0);
  
  return largest; 
}; 

console.log('Expected: 13' + '\n' + 'Output: ' + largestSum([2,4,6,2,5]));
console.log('Expected: 10' + '\n' + 'Output: ' + largestSum([5,1,1,5]));
