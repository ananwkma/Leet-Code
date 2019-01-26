/*
 * https://leetcode.com/problems/sort-array-by-parity-ii/
 * 
 * @param {number[]} A
 * @return {number[]}
 *
 * Time: O(N)
 * Space: O(1)
 */
var sortArrayByParityII = function(A) {
    for (let i = 0, j = 1; (i < A.length && j < A.length); i+=2, j+=2) {
        while (A[i] % 2 === 0) i+=2
        while (A[j] % 2 === 1) j+=2
        if (A[i] || A[j]) {
            let tmp = A[i]
            A[i] = A[j]
            A[j] = tmp
        }
    }
    return A
};

console.log('Expected: [4,5,2,7]' + '\n' + 'Output: ' + sortArrayByParityII([4,2,5,7]))
// [4,7,2,5], [2,5,4,7], [2,7,4,5] also accepted