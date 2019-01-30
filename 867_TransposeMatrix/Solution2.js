/*
 * https://leetcode.com/problems/transpose-matrix/
 * 
 * @param {number[][]} A
 * @return {number[][]}
 *
 * Time: O(N)
 * Space: O(1)
 */
var transpose = function(A) {
    return A[0].map((val, ind) => A.map(row => row[ind]));
};

console.log('Expected: [[1,4,7],[2,5,8],[3,6,9]]' + '\n' + 'Output: ' + transpose([[1,2,3],[4,5,6],[7,8,9]]))
console.log('Expected: [[1,4],[2,5],[3,6]]' + '\n' + 'Output: ' + transpose([[1,2,3],[4,5,6]]))
