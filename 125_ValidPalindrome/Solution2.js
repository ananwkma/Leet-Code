/*
 * https://leetcode.com/problems/valid-palindrome/
 *
 * @param {string} s
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(1)
 */
function alphanumeric(inputtxt) {
	if(inputtxt.match(/^[0-9a-zA-Z]+$/)) return true
	return false;
}

var isPalindrome = function(s) {
	for(let i = 0, j = s.length - 1; i< j; i++, j--) {
		while (!alphanumeric(s.charAt(i))) i++
		while (!alphanumeric(s.charAt(j-1))) j--
		if (s.charAt(i) !== s.charAt(j-1)) return false
	}
	return true
};

console.log('Expected: true' + '\n' + 'Output: ' + isPalindrome("`l;`` 1o1 ??;l`"))