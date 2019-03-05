/*
 * https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
 * 
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 *
 * Time: O(NlogN)
 * Space: O(N)
 *
 */

// combine all arrays
// sort
// return k element


var kthSmallest = function(matrix, k) {
	let combined = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			combined.push(matrix[i][j]);
		}
	}
	combined.sort((a,b) => {return a-b});
	return combined[k-1];
};


console.log('Expected: 13' + '\n' + 'Output: ' + kthSmallest([[1,5,9],[10,11,13],[12,13,15]],8))
console.log('Expected: 1' + '\n' + 'Output: ' + kthSmallest([[1,2],[1,3]],2))
