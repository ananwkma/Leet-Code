/*
 * https://leetcode.com/problems/contains-duplicate-ii/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(N)
 */


// Solution1
// two pointers - one at current index, one search ahead (max k distance) for duplicate
// return true if such a duplicate exists

// Solution2
// each element in the array put into an object of num: idx
// check if current idx is k distance from last idx


var containsNearbyDuplicate = function(nums, k) {
	let obj = {}
	for (let i = 0; i < nums.length; i++) {
		if (obj[nums[i]] === undefined) obj[nums[i]] = i 
		else {
			if (i - obj[nums[i]] <= k) return true
			else obj[nums[i]] = i
		}
	}
	return false
};

console.log('Expected: true' + '\n' + 'Output: ' + containsNearbyDuplicate([1,2,3,1], 3))
console.log('Expected: true' + '\n' + 'Output: ' + containsNearbyDuplicate([1,0,1,1], 1))
console.log('Expected: false' + '\n' + 'Output: ' + containsNearbyDuplicate([1,2,3,1,2,3], 2))
