/*
 * https://leetcode.com/problems/implement-strstr/
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 *
 * Time: O(A*B)
 * Space: O(1)
 */
var strStr = function(haystack, needle) {
	if (needle.length === 0) return 0
	for (let i = 0; i < haystack.length; i++) {
		for (let j = 0; j < needle.length; j++) {
			if (haystack.charAt(i + j) !== needle.charAt(j)) break
			else if (j === needle.length - 1) return i
		}
	}
	return -1
};

console.log('Expected: 2' + '\n' + 'Output: ' + strStr("hello", "ll"))