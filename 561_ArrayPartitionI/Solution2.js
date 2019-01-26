/*
 * https://leetcode.com/problems/array-partition-i/
 *
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(nlogn)
 * Space: O(1)
 */

var arrayPairSum = function(nums) {
	return nums.sort((a,b) => a-b).reduce((acc, cur, idx, src) => (idx % 2 === 0) ? (acc += cur): acc)
};

console.log('Expected: 4' + '\n' + 'Output: ' + arrayPairSum([1,4,3,2]))
console.log('Expected: -5075' + '\n' + 'Output: ' + arrayPairSum([6214, -2290, 2833, -7908]))
