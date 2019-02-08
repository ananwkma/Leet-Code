/*
 * https://leetcode.com/problems/reverse-string/
 * 
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 *
 * Time: O(N)
 * Space: O(1)
 *
 * Solution1
 */

// Solution1
// two arrays
// start at the end of an array, move backwards and add elements to new array
// abc -> c
// abc -> cb
// abc -> cba

// Solution2
// two pointers and swap
// one pointer at start of array one at end
// swap elements until meet at center
// abcde -> ebcda -> edcba

var reverseString = function(s) {
	for (let start = 0, end = s.length-1; start < end; start++, end--) {
		let tmp = s[start] 
		s[start] = s[end]
		s[end] = tmp
	}
	return s
};

console.log('Expected: ["o","l","l","e","h"]' + '\n' + 'Output: ' + reverseString(["h","e","l","l","o"]))
console.log('Expected: ["h","a","n","n","a","H"]' + '\n' + 'Output: ' + reverseString(["H","a","n","n","a","h"]))
