/*
 * https://leetcode.com/problems/smallest-range-i/
 * 
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 *
 * Time: O(N)
 * Space: O(1)
 */
var smallestRangeI = function(A, K) {
    return Math.max(0, (Math.max(...A) - Math.min(...A) - 2*K))
};

console.log('Expected: 4' + '\n' + 'Output: ' + smallestRangeI([3,1,10]))
