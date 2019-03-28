/*
 *
 * Time: O(N^2)
 * Space: O(1)
 *
 */

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

var targetSum = function(arr, k) {
  for (let i = 0; i < arr.length; i++) {
  	for (let j = i+1; j < arr.length; j++) {
  		if (arr[i] + arr[j] === k) return true;
  	}
  }
  return false;
};

console.log('Expected: true' + '\n' + 'Output: ' + targetSum([10, 15, 3, 7], 17))
// 10 + 7 = 17
