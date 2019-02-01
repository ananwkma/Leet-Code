/*
 * https://leetcode.com/problems/single-number/
 * 
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(NlogN)
 * Space: O(1)
 */

var singleNumber = function(nums) {
	nums = nums.sort()
	let res = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== nums[i+1]) return nums[i]
		else i++
	}
	return res
};

console.log('Expected: 1' + '\n' + 'Output: ' + singleNumber([2,2,1]))
console.log('Expected: 4' + '\n' + 'Output: ' + singleNumber([4,1,2,1,2]))
