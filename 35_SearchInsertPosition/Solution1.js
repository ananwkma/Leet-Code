/*
 * https://leetcode.com/problems/search-insert-position/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * Time: O(N)
 * Space: O(1)
 *
 */

// Solution1
// iteration O(N)
// iterate until you hit a number greater than target || target
// return target idx of that number

var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
    	if (nums[i] === target || nums[i] > target) return i 
    }
	return nums.length
};

console.log('Expected: 2' + '\n' + 'Output: ' + searchInsert([1,3,5,6], 5))
console.log('Expected: 1' + '\n' + 'Output: ' + searchInsert([1,3,5,6], 2))
console.log('Expected: 4' + '\n' + 'Output: ' + searchInsert([1,3,5,6], 7))
console.log('Expected: 0' + '\n' + 'Output: ' + searchInsert([1,3,5,6], 0))
