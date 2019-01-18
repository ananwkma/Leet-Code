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
    let d = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0] }
    moves.split('').map(move => {
        let [dx, dy] = d[move]
        horizCount += dx
        vertCount += dy	
    }
    return (horizCount === 0 && vertCount === 0)
};

console.log('Expected: true' + '\n' + 'Output: ' + judgeCircle('UD'))
console.log('Expected: false' + '\n' + 'Output: ' + judgeCircle('LL'))