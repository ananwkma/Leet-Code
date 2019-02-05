/*
 * https://leetcode.com/problems/contains-duplicate/
 * 
 * @param {number[]} nums
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

// sort array
// pointer for current and next 
// if curr == next, return true
// time NlogN space 1

// put contents in set
// if set has return true
// time N space N

var containsDuplicate = function(nums) {
	let test = new Set()
    for (let i = 0; i < nums.length; i++) {
    	if (test.has(nums[i])) return true
    	test.add(nums[i])
    }
	return false
};

console.log('Expected: true' + '\n' + 'Output: ' + containsDuplicate([1,2,3,1]))
console.log('Expected: false' + '\n' + 'Output: ' + containsDuplicate([1,2,3,4]))
console.log('Expected: true' + '\n' + 'Output: ' + containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
