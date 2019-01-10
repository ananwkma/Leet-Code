/*
 * https://leetcode.com/problems/sqrtx/submissions/
 *
 * @param {number} x
 * @return {number}
 *
 * Time: O(sqrt(x)+1)
 * Space: O(1)
 */

var mySqrt = function(x) {
	for (let i = 0; ; i++) {
		if ((i * i) > x) return i - 1
	}
};

console.log('Expected: 2' + '\n' + 'Output: ' + mySqrt(4))