/*
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 *
 * @param {number[]} A
 * @return {number}
 *
 * Time: O(N)
 * Space: O(1)
 */

var peakIndexInMountainArray = function(A) {
    let peak = 0
    if (A.length >= 3) {
    	for (let i = 1; i < A.length; i++) {
    		if (A[i-1] > A[i]) return (i-1)
    	}
    }
    return peak
};

console.log('Expected: 1' + '\n' + 'Output: ' + peakIndexInMountainArray([0,1,0]))
console.log('Expected: 1' + '\n' + 'Output: ' + peakIndexInMountainArray([0,2,1,0]))
