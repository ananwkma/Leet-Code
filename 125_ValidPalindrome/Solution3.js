/*
 * https://leetcode.com/problems/valid-palindrome/
 * 
 * @param {string} s
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

var isPalindrome = function(s) {
  const sanitized = s.toLowerCase().replace(/[\W_]/g, "");
  if (sanitized === sanitized.split('').reverse().join('')) return true;
  return false;
};

console.log('Expected: true' + '\n' + 'Output: ' + isPalindrome("`l;`` 1o1 ??;l`"))
console.log('Expected: true' + '\n' + 'Output: ' + isPalindrome("A man, a plan, a canal: Panama"))
console.log('Expected: false' + '\n' + 'Output: ' + isPalindrome("race a car"))
console.log('Expected: true' + '\n' + 'Output: ' + isPalindrome("__a_"))

