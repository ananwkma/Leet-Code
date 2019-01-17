/*
 * https://leetcode.com/problems/to-lower-case/
 *
 * @param {string} str
 * @return {string}
 *
 * Time: O(N)
 * Space: O(1)
 */

var toLowerCase = function(str) {
    str = str.split('').map(char => (
		(char.charCodeAt(0) < 91 && char.charCodeAt(0) > 64) 
			? String.fromCharCode((char.charCodeAt(0)) + 32)
			: char
    )).join('')

    return str
};

console.log('Expected: lovely' + '\n' + 'Output: ' + toLowerCase('LOveLY'))