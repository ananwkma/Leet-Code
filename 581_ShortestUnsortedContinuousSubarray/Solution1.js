/*
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 *
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(Nlog(n))
 * Space: O(N)
 */

var findUnsortedSubarray = function(nums) {
	let sorted = nums.slice(0).sort(function(a,b){return a-b})
    for (let i = 0, j = nums.length - 1; i <= j;) {
    	while (nums[i] === sorted[i]) {
    		if (i === (nums.length - 1)) return 0
    		i++
    	}
    	while (nums[j] === sorted[j]) j--
    	return j - i + 1
    }
};

console.log('Expected: 6' + '\n' + 'Output: ' + findUnsortedSubarray([1,3,5,2,4,9,8,10]))