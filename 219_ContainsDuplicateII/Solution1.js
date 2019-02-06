/*
 * https://leetcode.com/problems/contains-duplicate-ii/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 *
 * Time: O(N) (N = size of nums * k, worst case is k = size of nums and therefore N^2)
 * Space: O(1)
 */


// Solution1
// two pointers - one at current index, one search ahead (max k distance) for duplicate
// return true if such a duplicate exists

// Solution2
// each element in the array put into an object of num: idx
// check if current idx is k distance from last idx


var containsNearbyDuplicate = function(nums, k) {
    for (let i = 0; i < nums.length; i++) {
    	for (let j = 1; j <= k; j++) {
    		if (nums[i] === nums[i+j]) {
    			return true
    		}
    	}
    }
    return false
};

console.log('Expected: true' + '\n' + 'Output: ' + containsNearbyDuplicate([1,2,3,1], 3))
console.log('Expected: true' + '\n' + 'Output: ' + containsNearbyDuplicate([1,0,1,1], 1))
console.log('Expected: false' + '\n' + 'Output: ' + containsNearbyDuplicate([1,2,3,1,2,3], 2))
