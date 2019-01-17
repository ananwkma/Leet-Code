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
    let max = A.length
    let strlen = A[0].length
    for (let i = 0; i < strlen; i++) {
        for (let j = 0; j < max - 1; j++) {
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
console.log('Expected: 3' + '\n' + 'Output: ' + minDeletionSize(["rrjk","furt","guzm"]))
