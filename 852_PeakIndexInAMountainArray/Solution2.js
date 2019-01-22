/*
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 *
 * @param {number[]} A
 * @return {number}
 *
 * Time: O(logN)
 * Space: O(1)
 */

var peakIndexInMountainArray = function(A) {
	let [down, up] = [0, A.length - 1]
	while (down < up) {
		let mid = Math.floor((up + down)/2)
		if (A[mid + 1] > A[mid]) down = mid + 1
		else up = mid
	}
    return up
};

console.log('Expected: 1' + '\n' + 'Output: ' + peakIndexInMountainArray([0,1,0]))
console.log('Expected: 1' + '\n' + 'Output: ' + peakIndexInMountainArray([0,2,1,0]))
console.log('Expected: 1' + '\n' + 'Output: ' + peakIndexInMountainArray([0,1,2,3,4,1,0]))
