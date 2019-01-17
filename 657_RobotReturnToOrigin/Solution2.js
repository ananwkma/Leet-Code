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
    return ((moves.split('U').length - 1) === (moves.split('D').length - 1)) &&
        ((moves.split('L').length - 1) === (moves.split('R').length - 1))
};

console.log('Expected: true' + '\n' + 'Output: ' + judgeCircle('UD'))
console.log('Expected: false' + '\n' + 'Output: ' + judgeCircle('LL'))