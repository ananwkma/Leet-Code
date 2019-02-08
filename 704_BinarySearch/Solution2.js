/*
 * https://leetcode.com/problems/binary-search/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * Time: O(logN)
 * Space: O(1)
 *
 */

// Solution2
// binsearch O(logN)
// go to mid
// if mid is equal return mid
// if mid is less lo = mid + 1
// if mid is greater hi = mid - 1
// default return -1

var search = function(nums, target) {
	let [lo, hi] = [0, nums.length-1]
	while (hi >= lo) {
		let mid = Math.floor((hi+lo)/2)
		if (nums[mid] === target) return mid
		else if (nums[mid] > target) hi = mid-1
		else if (nums[mid] < target) lo = mid+1
	}
	return -1
};

console.log('Expected: 0' + '\n' + 'Output: ' + search([5], 5))
console.log('Expected: 4' + '\n' + 'Output: ' + search([-1,0,3,5,9,12], 9))
console.log('Expected: -1' + '\n' + 'Output: ' + search([-1,0,3,5,9,12], 2))
