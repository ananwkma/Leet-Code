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
  if (s.length === 0) return true;
  if (s.length === 1) return false;

  let i = 0;
  let stack = []
  stack.push(s[0]);

  while (i < s.length-1) { 
    i++;

    if (s[i] === '(' || s[i] === '{' || s[i] === '[') stack.push(s[i]);

    else {
      const test = stack.pop();
      if (test === '(' && s[i] === ')' ||
          test === '[' && s[i] === ']' ||
          test === '{' && s[i] === '}'
         ) continue;
      else return false;
    }
  }
  if (stack.length > 0) return false;
  return true;
};

console.log('Expected: true' + '\n' + 'Output: ' + isValid("()"));
console.log('Expected: true' + '\n' + 'Output: ' + isValid("()[]{}"));
console.log('Expected: false' + '\n' + 'Output: ' + isValid("(]"));
console.log('Expected: false' + '\n' + 'Output: ' + isValid("([)]"));
console.log('Expected: true' + '\n' + 'Output: ' + isValid("{[]}"));
