/*
 * https://leetcode.com/problems/excel-sheet-column-title/
 *
 * @param {number} n
 * @return {string}
 *
 * Time: O()
 * Space: O(1)
 */

var convertToTitle = function(n) {
    let answer = ''
    while (n > 0) {
    	let remainder = (n % 26)
    	if (remainder === 0) remainder = 26
    	answer = String.fromCharCode(remainder + 64) + answer
    	n = (n - remainder) / 26
    }
    return answer
};

console.log('Expected: A' + '\n' + 'Output: ' + convertToTitle(1))
console.log('Expected: AB' + '\n' + 'Output: ' + convertToTitle(28))
console.log('Expected: ZY' + '\n' + 'Output: ' + convertToTitle(701))



