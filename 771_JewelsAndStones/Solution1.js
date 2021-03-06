/*
 * https://leetcode.com/problems/jewels-and-stones/
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
	const jewels = new Set()
    J.split('').map(letter => jewels.add(letter))
    return S.split('').filter(letter => jewels.has(letter)).length
};

const J = "aA"
const S = "aAAbbbb"

console.log('Expected: 3' + '\n' + 'Output: ' + numJewelsInStones (J, S))