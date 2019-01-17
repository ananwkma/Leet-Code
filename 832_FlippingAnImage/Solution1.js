/*
 * https://leetcode.com/problems/flipping-an-image/
 *
 * @param {number[][]} A
 * @return {number[][]}
 *
 * Modular Solution
 * Time: O(N)
 * Space: O(N)
 */

flipArray = (arr) => {
	let newArr = []
	arr.map(num => {
		newArr.unshift(num)
	})
	return newArr
}

invertArray = (arr) => {
	arr = arr.map(num => {
		if (num === 0) return 1
		else if (num === 1) return 0
	})
	return arr
}

var flipAndInvertImage = function(A) {
    A = A.map(arr => (
    	invertArray(flipArray(arr))
    ))
    return A
};

console.log('Expected: [[1,0,0],[0,1,0],[1,1,1]]' + '\n' + 'Output: ' + flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
console.log('Expected: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]' + '\n' + 'Output: ' + flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))