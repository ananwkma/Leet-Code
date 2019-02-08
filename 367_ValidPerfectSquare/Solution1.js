/*
 * https://leetcode.com/problems/valid-perfect-square/
 * 
 * @param {number} num
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(1)
 *
 */

// Solution1
// Iteration
// start with 0, multiply by itself until you get a number equal to or larger than num
// equal -> true
// larget -> false


var isPerfectSquare = function(num) {
    for (let i = 0; ; i++) {
    	if (i*i > num) return false
    	if (i*i === num) return true
    }
};

console.log('Expected: true' + '\n' + 'Output: ' + isPerfectSquare(16))
console.log('Expected: false' + '\n' + 'Output: ' + isPerfectSquare(14))
