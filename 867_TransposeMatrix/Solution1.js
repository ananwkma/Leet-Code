/*
 * https://leetcode.com/problems/transpose-matrix/
 * 
 * @param {number[][]} A
 * @return {number[][]}
 *
 * Time: O(N)
 * Space: O(N)
 */
var transpose = function(A) {
    let B = []
    for (let i = 0; i < A[0].length; i++) {
        B[i] = []
        for (let j = 0; j < A.length; j++) {
            B[i][j] = A[j][i]
        }
    }
    return B
};

console.log('Expected: [[1,4,7],[2,5,8],[3,6,9]]' + '\n' + 'Output: ' + transpose([[1,2,3],[4,5,6],[7,8,9]]))
console.log('Expected: [[1,4],[2,5],[3,6]]' + '\n' + 'Output: ' + transpose([[1,2,3],[4,5,6]]))
