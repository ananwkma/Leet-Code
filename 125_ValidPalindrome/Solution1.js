/*
 * https://leetcode.com/problems/valid-palindrome/
 *
 * @param {string} s
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(N)
 */

var isPalindrome = function(s) {
	justLetters = s.replace(/[-&\/\\#,+()$~%. '";:*!?<>{}@`\n]/g, '').toUpperCase().split('');
	for (let i = 0; i < Math.floor(justLetters.length/2); i++) {
		if (justLetters[i] !== justLetters[justLetters.length-1-i]) return false
	}
	return true
};

console.log('Expected: true' + '\n' + 'Output: ' + isPalindrome("`l;`` 1o1 ??;l`"))