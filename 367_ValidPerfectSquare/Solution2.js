/*
 * https://leetcode.com/problems/valid-perfect-square/
 * 
 * @param {number} num
 * @return {boolean}
 *
 * Time: O(logN)
 * Space: O(1)
 *
 */

// Solution1
// Iteration
// start with (hi = num/2, lo = 0)
// bin search with mid while hi >= lo
// default false


var isPerfectSquare = function(num) {
	if (num === 1) return true
	let [hi, lo] = [Math.floor(num/2), 0]
    while (hi >= lo) {
    	let i = Math.floor((hi+lo)/2)
    	if (i*i === num) return true
    	if (i*i > num) hi = i - 1 
    	if (i*i < num) lo = i + 1
    }
	return false
};

console.log('Expected: true' + '\n' + 'Output: ' + isPerfectSquare(16))
console.log('Expected: false' + '\n' + 'Output: ' + isPerfectSquare(14))
console.log('Expected: true' + '\n' + 'Output: ' + isPerfectSquare(1))
