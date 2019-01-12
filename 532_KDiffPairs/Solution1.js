/*
 * https://leetcode.com/problems/k-diff-pairs-in-an-array/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * Time: O(N), O(Nlog(N)) with sort
 * Space: O(N)
 */

var findPairs = function(nums, k) {
	if (k < 0) return 0
	// nums.sort(function(a,b) { return a - b })
	let allNums = new Set()
	let resNums = new Set()
	for (let i = 0; i < nums.length; i++) {
		if (allNums.has(nums[i] - k)) resNums.add(nums[i])
		if (allNums.has(nums[i] + k)) resNums.add(nums[i] + k)
		allNums.add(nums[i])
	}
	return resNums.size
};

console.log('Expected: 0' + '\n' + 'Output: ' + findPairs([1,2,3,4,5],-1))
console.log('Expected: 2' + '\n' + 'Output: ' + findPairs([3,3,4,1,5],2))
console.log('Expected: 2' + '\n' + 'Output: ' + findPairs([3,1,4,1,5],2))
console.log('Expected: 1' + '\n' + 'Output: ' + findPairs([1,3,1,5,4],0))