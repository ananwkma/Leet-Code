/*
 * https://leetcode.com/problems/find-the-difference/
 * 
 * @param {string} s
 * @param {string} t
 * @return {character}
 *
 * Time: O(N)
 * Space: O(1)
 *
 */

var findTheDifference = function(s, t) {
	let [sSum, tSum] = [0,0]
	for (let i = 0; i < t.length; i++) {
		tSum += t.charCodeAt(i)
		if (i < t.length - 1) sSum += s.charCodeAt(i)
	}
	return String.fromCharCode(tSum - sSum)
};

console.log('Expected: e' + '\n' + 'Output: ' + findTheDifference("abcd", "abcde"))
