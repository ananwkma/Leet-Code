/*
 * https://leetcode.com/problems/single-number/
 * 
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(N)
 * Space: O(N)
 */

var singleNumber = function(nums) {
	let unique = new Set()
	let dupe = new Set()
	for (let i = 0; i < nums.length; i++) {
		if (!unique.has(nums[i]) && !dupe.has(nums[i])) unique.add(nums[i])
		else {
			if (unique.has(nums[i])) unique.delete(nums[i])
			dupe.add(nums[i])
		}
	}
	return unique.keys().next().value
};

console.log('Expected: 1' + '\n' + 'Output: ' + singleNumber([2,2,1]))
console.log('Expected: 4' + '\n' + 'Output: ' + singleNumber([4,1,2,1,2]))
