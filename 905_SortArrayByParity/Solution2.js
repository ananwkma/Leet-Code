/*
 * https://leetcode.com/problems/sort-array-by-parity/
 *
 * @param {number[]} A
 * @return {number[]}
 *
 * Time: O(N)
 * Space: O(1)
 */
var sortArrayByParity = function(A) {
    for (let i = 0, j = A.length-1; i < j; i++, j--) {
    	while (A[i] % 2 === 0) i++
    	while (A[j] % 2 !== 0) j--
    	let tmp = A[i]
    	A[i] = A[j]
    	A[j] = tmp
    }
	return A
};

console.log('Expected: [2,4,3,1]' + '\n' + 'Output: ' + sortArrayByParity([3,1,2,4]))