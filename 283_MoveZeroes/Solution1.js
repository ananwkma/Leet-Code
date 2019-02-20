/*
 * https://leetcode.com/problems/move-zeroes/
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

// 0 -> count = 1
// 1 -> 1
// 0 -> count = 2
// 3 -> 3
// 12 -> 12
// 0 -> 0 count = 1
// 0 -> 0 count = 0

// Solution1 
// iterate through the array, if zero, skip it and increment a counter
// else just push it into a new array
// for loop to add zeroes to array

var moveZeroes = function(nums) {
	let res = []
	let count = 0
    for (let i = 0; i < nums.length; i++) {
    	if (nums[i] === 0) count++;
    	else res.push(nums[i])
    }
	for (;count > 0; count--) { res.push(0) }
	return res
};

console.log('Expected: [1,3,12,0,0]' + '\n' + 'Output: ' + moveZeroes([0,1,0,3,12]))
