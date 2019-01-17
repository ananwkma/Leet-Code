/*
 * https://leetcode.com/problems/delete-columns-to-make-sorted/
 *
 * @param {string[]} A
 * @return {number}
 *
 * Time: O()
 * Space: O()
 */

var minDeletionSize = function(A) {
    let count = 0
    for (let i = 0; i < A[0].length; i++) {
        for (let j = 0; j < A.length - 1; j++) {
            if (A[j][i] > A[j+1][i]) {
                count++
                break
            }
        }
    }
    return count
};

console.log('Expected: 1' + '\n' + 'Output: ' + minDeletionSize(["cba","daf","ghi"]))
console.log('Expected: 0' + '\n' + 'Output: ' + minDeletionSize(["a","b"]))
console.log('Expected: 3' + '\n' + 'Output: ' + minDeletionSize(["zyx","wvu","tsr"]))
console.log('Expected: 2' + '\n' + 'Output: ' + minDeletionSize(["rrjk","furt","guzm"]))
