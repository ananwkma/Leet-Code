/*
 *
 * Time: O(N)
 * Space: O(1)
 *
 */

// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. 
// Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. 

// [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

// idx    val     add idx -2    add idx -3    max (new val)
// 0      2                                   2
// 1      4                                   4
// 2      6       8                           8
// 3      2       6             4             6
// 4      5       13            9             13

// dynamically store max of cur/cur+(idx-2)/cur+(idx-3) in array

var largestSum = function(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (i-2 >= 0 && (arr[i-2] + arr[i]) > val) val = (arr[i-2] + arr[i]);
    if (i-3 >= 0 && (arr[i-3] + arr[i]) > val) val = (arr[i-3] + arr[i]); 
    if (val > max) max = val;
    arr[i] = val;
  }
  return max;
}; 

console.log('Expected: 13' + '\n' + 'Output: ' + largestSum([2,4,6,2,5]));
console.log('Expected: 10' + '\n' + 'Output: ' + largestSum([5,1,1,5]));
