/*
 * https://leetcode.com/problems/move-zeroes/
 * 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

// [0,1,0,3,12]
// [1,0,3,12,0]
// [1,3,12,0,0]

// Solution2
// two pointers
// one slow one fast
// slow finds zero, fast finds nonzero
// swap if both are found

var moveZeroes = function(nums) {
	let [i, j] = [0, 0]
	while (i < nums.length-1 && j < nums.length-1) {
		while (nums[i] !== 0 && nums[i] !== undefined) i++
		while (nums[j] === 0 && nums[j] !== undefined) j++
		if (nums[j] !== undefined && nums[i] !== undefined && (i < j)) {
			let tmp = nums[i]
			nums[i] = nums[j]
			nums[j] = tmp
		}
		if (i > j) j++
	}
	return nums
}

console.log('Expected: [1,0,0]' + '\n' + 'Output: ' + moveZeroes([1,0,0]))
// console.log('Expected: [1,0]' + '\n' + 'Output: ' + moveZeroes([1,0]))
// console.log('Expected: [2,1]' + '\n' + 'Output: ' + moveZeroes([2,1]))
// console.log('Expected: [1,3,12,0,0]' + '\n' + 'Output: ' + moveZeroes([0,1,0,3,12]))
// console.log('Expected: [0,0]' + '\n' + 'Output: ' + moveZeroes([0,0]))
