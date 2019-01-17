/*
 * https://leetcode.com/problems/sort-array-by-parity/
 *
 * @param {number[]} A
 * @return {number[]}
 *
 * Time: O(N)
 * Space: O(N)
 */
var sortArrayByParity = function(A) {
	newArr = []
    for (let i = 0; i < A.length; i++) {
    	if (A[i] % 2 === 0) newArr.unshift(A[i])
    	else newArr.push(A[i])
    }
	return newArr
};

console.log('Expected: [2,4,3,1]' + '\n' + 'Output: ' + sortArrayByParity([3,1,2,4]))