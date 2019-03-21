/*
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 * 
 * @param {string} S
 * @return {number}
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

// ()) 		1
// ((( 		3
// () 		0
// ()))(( 	4	
// (		Stack: 1 Count: 0
// ()		Stack: 0 Count: 0
// )		Stack: 0 Count: 1
// )		Stack: 0 Count: 2
// (		Stack: 1 Count: 2
// (		Stack: 2 Count: 2
// res = stack + count = 4

var minAddToMakeValid = function(S) {
  let stack = [];
  let count = 0;

  for (let i = 0; i < S.length; i++) {
  	if (S[i] === '(') stack.push('(');
  	else if (S[i] === ')' && stack.length > 0) stack.pop();
  	else count++;
  }
	
  return (count + stack.length);
};

console.log('Expected: 1' + '\n' + 'Output: ' + minAddToMakeValid("())"))
console.log('Expected: 3' + '\n' + 'Output: ' + minAddToMakeValid("((("))
console.log('Expected: 0' + '\n' + 'Output: ' + minAddToMakeValid("()"))
console.log('Expected: 4' + '\n' + 'Output: ' + minAddToMakeValid("()))(("))
