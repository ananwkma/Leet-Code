/*
 * https://leetcode.com/problems/flipping-an-image/
 *
 * @param {number[][]} A
 * @return {number[][]}
 *
 * Modular Solution
 * Time: O(N)
 * Space: O(1)
 */

var flipAndInvertImage = function(A) {
	A = A.map(arr => {
		arr.reverse()
		for (let i = 0; i < arr.length; i++) {
			arr[i] = Math.abs(arr[i] - 1)
		}
		return arr
	})
    return A
};

console.log('Expected: [[1,0,0],[0,1,0],[1,1,1]]' + '\n' + 'Output: ' + flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
console.log('Expected: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]' + '\n' + 'Output: ' + flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))