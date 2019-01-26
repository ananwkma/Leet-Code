/*
 * https://leetcode.com/problems/array-partition-i/
 *
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(nlogn)
 * Space: O(1)
 */

var arrayPairSum = function(nums) {
nums.sort((a,b) => a-b)
	let sum = 0
	for (let i = 0; i < nums.length; i++) {
		if (i % 2 === 0) sum += nums[i]
	}
	return sum
};

console.log('Expected: 4' + '\n' + 'Output: ' + arrayPairSum([1,4,3,2]))
console.log('Expected: -5075' + '\n' + 'Output: ' + arrayPairSum([6214, -2290, 2833, -7908]))
