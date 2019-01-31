/*
 * https://leetcode.com/problems/distribute-candies/
 * 
 * @param {number[]} candies
 * @return {number}
 *
 * Completion: 6:30
 *
 * Time: O(N)
 * Space: O(N)
 */
var distributeCandies = function(candies) {
    let s = new Set()
    for (let i = 0; i < candies.length; i++) {
    	s.add(candies[i])
    }
    return Math.min(candies.length/2, s.size)
};

console.log('Expected: 3' + '\n' + 'Output: ' + distributeCandies([1,1,2,2,3,3]))
console.log('Expected: 2' + '\n' + 'Output: ' + distributeCandies([1,1,2,3]))
