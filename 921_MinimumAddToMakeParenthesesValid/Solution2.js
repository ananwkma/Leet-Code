/*
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 * 
 * @param {string} S
 * @return {number}
 *
 * Time: O(N)
 * Space: O(1)
 *
 */

// ()) 		1
// ((( 		3
// () 		0
// ()))(( 	4	

// ( 		balance: 1
// ()		balance: 0
// ())		balance: 0	count: 1

// (((		balance: 3

// ()		balance: 0
// ()))		balance: 0	count: 1
// ()))((	balance: 2	count: 2

var minAddToMakeValid = function(S) {
	let [balance, count] = [0, 0];
	for (let i = 0; i < S.length; i++) {
		if (S[i] === '(') balance++;
		else if (S[i] === ')' && balance === 0) count++;
		else balance--;
	}
	return balance + count;
};

console.log('Expected: 1' + '\n' + 'Output: ' + minAddToMakeValid("())"))
console.log('Expected: 3' + '\n' + 'Output: ' + minAddToMakeValid("((("))
console.log('Expected: 0' + '\n' + 'Output: ' + minAddToMakeValid("()"))
console.log('Expected: 4' + '\n' + 'Output: ' + minAddToMakeValid("()))(("))
