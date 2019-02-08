/*
 * https://leetcode.com/problems/search-insert-position/
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
// bin search O(logN)
// go to mid, if equals target return idx
// if larger, check if idx-1 is smaller than target, if true return idx
// if smaller, check if idx+1 is larger than target, if true return idx

var searchInsert = function(nums, target) {
	let [lo, hi] = [0, nums.length-1]
	while (lo <= hi) {
		let mid = Math.floor((lo+hi)/2)
		if (nums[mid] === target) return mid
		else if (nums[mid] > target) {
			if (!nums[mid-1] || nums[mid-1] < target) return mid
			hi = mid - 1
		}
		else if (nums[mid] < target) {
			if (!nums[mid+1] || nums[mid+1] > target) return mid+1
			lo = mid + 1
		}
	}
};

console.log('Expected: 2' + '\n' + 'Output: ' + searchInsert([1,3,5,6], 5))
console.log('Expected: 1' + '\n' + 'Output: ' + searchInsert([1,3,5,6], 2))
console.log('Expected: 4' + '\n' + 'Output: ' + searchInsert([1,3,5,6], 7))
console.log('Expected: 0' + '\n' + 'Output: ' + searchInsert([1,3,5,6], 0))
