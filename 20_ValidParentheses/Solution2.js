/*
 * https://leetcode.com/problems/valid-parentheses/
 * 
 * @param {string} s
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

// '()' '{}' '[]'
// stack 

// ()([)]
//
// (
// ()
// (
// ([
// ([)

// {[]}
// {
// {[
// {[]
// {}

// add to stack if left paren
// pop and compare if right paren

var isValid = function(s) {
  const dict = { '(': ')', '{': '}', '[': ']' }
  let i = 0;
  let stack = [];

  while (i < s.length) {
    if (dict[stack[stack.length - 1]] === s[i]) stack.pop();
    else stack.push(s[i]);
    i++;
  }
  return stack.length === 0 ? true : false;
};

console.log('Expected: true' + '\n' + 'Output: ' + isValid("()"));
console.log('Expected: true' + '\n' + 'Output: ' + isValid("()[]{}"));
console.log('Expected: false' + '\n' + 'Output: ' + isValid("(]"));
console.log('Expected: false' + '\n' + 'Output: ' + isValid("([)]"));
console.log('Expected: true' + '\n' + 'Output: ' + isValid("{[]}"));
console.log('Expected: true' + '\n' + 'Output: ' + isValid(""));
console.log('Expected: false' + '\n' + 'Output: ' + isValid("]"));
