/*
 * https://leetcode.com/problems/binary-search/
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
// search until match target -> return idx
// or until cur number is greater than target -> return -1
// default return -1

var search = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
    	if (nums[i] === target) return i
    	else if (nums[i] > target) return -1
    }
	return -1
};

console.log('Expected: 4' + '\n' + 'Output: ' + search([-1,0,3,5,9,12], 9))
console.log('Expected: -1' + '\n' + 'Output: ' + search([-1,0,3,5,9,12], 2))
