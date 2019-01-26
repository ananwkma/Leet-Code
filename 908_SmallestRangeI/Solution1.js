/*
 * https://leetcode.com/problems/smallest-range-i/
 * 
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 *
 * Time: O(NlogN)
 * Space: O(1)
 */
var smallestRangeI = function(A, K) {
    A.sort((a,b) => {return a-b})
    let min = A[0]
    let max = A[A.length-1]
    min += K
    max -= K
    if (min > max) return 0
    else return (max - min)
};

console.log('Expected: 4' + '\n' + 'Output: ' + smallestRangeI([3,1,10]))
