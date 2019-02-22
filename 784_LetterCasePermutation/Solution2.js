/*
 * https://leetcode.com/problems/letter-case-permutation/
 * 
 * @param {string} S
 * @return {string[]}
 *
 * Time: O(2^N)
 * Space: O(2^N)
 *
 */

/*
('', 0)
 ('a', 1)
   ('a1', 2)
     ('a1b', 3)
       ('a1b2', 4) <= terminate.
     ('a1B', 3)
       ('a1B2', 4)
 ('A', 1)


('', 0)
  ('1', 1)

*/

var letterCasePermutation = function(S) {
	let res = []
	let progress = ''
	let len = 0

	dfs = (progress, len) => {
		if (len === S.length) return res.push(progress)
		let curChar = S.charAt(len)
		if (!isNaN(curChar)) dfs(progress + curChar, len + 1)
		else if (isNaN(curChar)) {
			dfs(progress + curChar.toUpperCase(), len + 1)
			dfs(progress + curChar.toLowerCase(), len + 1)
		}
	}
	dfs(progress, len)
	return res
};

console.log('Expected: ["a1b2", "a1B2", "A1b2", "A1B2"]' + '\n' + 'Output: ' + letterCasePermutation("a1b2"))
console.log('Expected: ["3z4", "3Z4"]' + '\n' + 'Output: ' + letterCasePermutation("3z4"))
console.log('Expected: ["12345"]' + '\n' + 'Output: ' + letterCasePermutation("12345"))
console.log('Expected: ["c","C"]' + '\n' + 'Output: ' + letterCasePermutation("C"))
