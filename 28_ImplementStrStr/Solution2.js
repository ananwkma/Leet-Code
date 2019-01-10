/*
 * https://leetcode.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	if (needle.length === 0) return 0
	for (let i = 0; i < haystack.length; i++) {
		for (let j = 0; j < needle.length; j++) {				
				// console.log('hay',haystack.charAt(i + j))
				// console.log('nee',needle.charAt(j))
				// console.log('i',i)
				// console.log('j',j)
			if (haystack.charAt(i + j) === needle.charAt(j) && j === needle.length - 1) {
				return i + j - (needle.length - 1)
			}
			else if (!(haystack.charAt(i + j) === needle.charAt(j))) {
				break
			}
		}
	}
	return -1
};

console.log('Expected: 2' + '\n' + 'Output: ' + strStr("hello", "ll"))