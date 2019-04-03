/*
 *
 * Time: O(N^2)
 * Space: O(N)
 *
 */

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// [1, 2, 3, 4, 5]
// [120, 60, 40, 30, 24]

// [3, 2, 1]
// [2, 3, 6]

// Follow-up: what if you can't use division?

// Double for loop
// i iterate every element
// j iterate and get product of every element except i

var productOfArray = function(arr) {
	let res = [];

	for (let i = 0; i < arr.length; i++) {
		let product = 1;
		for (let j = 0; j < arr.length; j++) {
			if (j !== i) product *= arr[j];
		}
		res.push(product);
	}
	
	return res;
};

console.log('Expected: [2, 3, 6]' + '\n' + 'Output: ' + productOfArray([3, 2, 1]));
console.log('Expected: [120, 60, 40, 30, 24]' + '\n' + 'Output: ' + productOfArray([1, 2, 3, 4, 5]));
