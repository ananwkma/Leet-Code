/*
 * https://leetcode.com/problems/robot-return-to-origin/
 *
 * @param {string} moves
 * @return {boolean}
 *
 * Modular Solution
 * Time: O(N)
 * Space: O(1)
 */

var judgeCircle = function(moves) {
    let [horizCount, vertCount] = [0, 0]
    moves.split('').map(move => {
    	switch (move) {
    		case 'U': 
    			vertCount++
    			break
    		case 'D': 
    			vertCount--
    			break
    		case 'L': 
    			horizCount--
    			break
    		case 'R': 
    			horizCount++
    			break
    	}
    })
    return (horizCount === 0 && vertCount === 0) ? true : false 
};

console.log('Expected: true' + '\n' + 'Output: ' + judgeCircle('UD'))
console.log('Expected: false' + '\n' + 'Output: ' + judgeCircle('LL'))