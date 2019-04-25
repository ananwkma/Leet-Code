/*
 *
 * Time: O(N^2)
 * Space: O(N)
 *
 */

// Given an array of integers and a number k, 
// where 1 <= k <= length of the array, 
// compute the maximum values of each subarray of length k.

// For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, 
// we should get: [10, 7, 8, 8], since:

// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)
// Do this in O(n) time and O(k) space. 
// You can modify the input array in-place and you do not need to store the results. 
// You can simply print them out as you compute them.

const maxValue = (arr, k) => {
  let queue = [];
  for (let i = 0; i < arr.length; i++) {
    queue.push(arr[i]);
    if (i >= k - 1) {
      console.log(Math.max(...queue));
      queue.shift();
    }
  }
}

console.log('Expected: 10,7,8,8' + '\n' + 'Output: ' + maxValue([10, 5, 2, 7, 8, 7], 3))
