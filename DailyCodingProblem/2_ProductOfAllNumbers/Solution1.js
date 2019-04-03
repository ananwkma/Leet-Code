/*
 *
 * Time: O(N)
 * Space: O(1)
 *
 */

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// [1, 2, 3, 4, 5]
// [120, 60, 40, 30, 24]

// [3, 2, 1]
// [2, 3, 6]

// Follow-up: what if you can't use division?

// Two passes
// Get product and then divide each entry by ith element

var productOfArray = function(arr) {
	let product = 1;
	for (let i = 0; i < arr.length; i++) {
		product *= arr[i];
	}
	for (let i = 0; i < arr.length; i++) {
		arr[i] = product / arr[i];
	}
	return arr;
};

console.log('Expected: [2, 3, 6]' + '\n' + 'Output: ' + productOfArray([3, 2, 1]));
console.log('Expected: [120, 60, 40, 30, 24]' + '\n' + 'Output: ' + productOfArray([1, 2, 3, 4, 5]));
