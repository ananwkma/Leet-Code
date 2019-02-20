/*
 * https://leetcode.com/problems/letter-case-permutation/
 * 
 * @param {string} S
 * @return {string[]}
 *
 * Time: O(N^2)
 * Space: O(N)
 *
 */

var letterCasePermutation = function(S) {
	let set = new Set()
	set.add(S)
	recursion = (str) => {
		for (let i = 0; i < str.length; i++) {
			let curChar = str.charAt(i)
			if (curChar.match(/[a-z]/i)) {
				set.add(str)
				let newStr = ''
				if (curChar === curChar.toUpperCase()) {
					newStr = str.substring(0,i) + curChar.toLowerCase() + str.substring(i+1)
				}
				else if (curChar === curChar.toLowerCase()) {
					newStr = str.substring(0,i) + curChar.toUpperCase() + str.substring(i+1)
				}
				if (!set.has(newStr)) recursion(newStr)
			}
		}
	}
	recursion(S)
	let res = [...set]
	return res
};

// recursion
// every letter, n^2
// no letters, return S
// add lowercase and uppercase ver to arr

// console.log('Expected: ["a1b2", "a1B2", "A1b2", "A1B2"]' + '\n' + 'Output: ' + letterCasePermutation("a1b2"))
// console.log('Expected: ["3z4", "3Z4"]' + '\n' + 'Output: ' + letterCasePermutation("3z4"))
// console.log('Expected: ["12345"]' + '\n' + 'Output: ' + letterCasePermutation("12345"))
console.log('Expected: ["c","C"]' + '\n' + 'Output: ' + letterCasePermutation("C"))
