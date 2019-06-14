/*
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * @param {string} s
 * @return {number}
 *
 * Time: O(N^2)
 * Space: O(N)
 *
 */

// p      1
// pw     2
// pww    X
// w      1
// ww     X
// w      1
// wk     2
// wke    3
// wkew   X
// k      1
// ke     2
// kew    3
// e      1
// ew     2
// w      1
// max = 3

// two pointers
// one pointer selects first char
// one pointer adds all subsequent chars to set
// if set has the char already, stop and compare max
// return max


var lengthOfLongestSubstring = function(s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let substrSet = new Set;
    for (let j = i; j < s.length; j++) {
      if (substrSet.has(s[j])) break;
      substrSet.add(s[j]);
    }
    if (substrSet.size > max) max = substrSet.size;
  }
  return max;
};

console.log('Expected: 3' + '\n' + 'Output: ' + lengthOfLongestSubstring("abcabcbb"));
console.log('Expected: 1' + '\n' + 'Output: ' + lengthOfLongestSubstring("bbbbb"));
console.log('Expected: 3' + '\n' + 'Output: ' + lengthOfLongestSubstring("pwwkew"));
console.log('Expected: 1' + '\n' + 'Output: ' + lengthOfLongestSubstring(" "));
