/*
 * https://leetcode.com/problems/arranging-coins/
 * 
 * @param {number} n
 * @return {number}
 *
 * Time: O(N)
 * Space: O(1)
 *
 */

// Solution1
// Iteration
// for loop add i to an accumulator
// if accumulator > n, return i-1

var arrangeCoins = function(n) {
	let accumulator = 0
    for (let i = 0; ; i++) {
    	accumulator += i
    	if (accumulator > n) return i-1
    }
};

console.log('Expected: 2' + '\n' + 'Output: ' + arrangeCoins(5))
console.log('Expected: 3' + '\n' + 'Output: ' + arrangeCoins(8))
