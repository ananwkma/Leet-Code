/*
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// [1, 2, 3, 4, 5]
// [120, 60, 40, 30, 24]

// [3, 2, 1]
// [2, 3, 6]

// Follow-up: what if you can't use division?

// left : [1,1,2,6,24] (1, 1*1, 1*1*2, 1*1*2*3, 1*1*2*3*4)
// right : [120,60,20,5,1] (1*2*3*4*5, 1*3*4*5, 1*4*5, 1*5, 1*1)
// multiply right and left arrays

// left : [1, 3, 6]
// right : [2, 1, 1]
// ans : [2, 3, 6]

var productOfArray = function(arr) {
	let left = [];
	let right = [];
	let res = [];
	let [leftProd, rightProd] = [1, 1]; 

	for (let i = 0; i < arr.length; i++) {
		if (i-1 >= 0) leftProd *= arr[i-1];
		left.push(leftProd);
	}

	for (let i = arr.length-1; i >= 0; i--) {
		if (i+1 < arr.length) rightProd *= arr[i+1];
		right.unshift(rightProd);
	}

	for (let i = 0; i < arr.length; i++) {
		res.push(left[i] * right[i]);
	}

	return res;
};

console.log('Expected: [2, 3, 6]' + '\n' + 'Output: ' + productOfArray([3, 2, 1]));
console.log('Expected: [120, 60, 40, 30, 24]' + '\n' + 'Output: ' + productOfArray([1, 2, 3, 4, 5]));
