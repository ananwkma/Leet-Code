/*
 * https://leetcode.com/problems/valid-anagram/
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

var isAnagram = function(s, t) {
  let dict = {};
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    dict[s[i]] = dict[s[i]] + 1 || 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!dict[t[i]]) return false;
    dict[t[i]] = dict[t[i]] - 1;
    if (dict[t[i]] === 0) delete dict[t[i]];
  }

  return true;
};

console.log('Expected: false' + '\n' + 'Output: ' + isAnagram("a", "ab"))
console.log('Expected: true' + '\n' + 'Output: ' + isAnagram("anagram", "nagaram"))
console.log('Expected: false' + '\n' + 'Output: ' + isAnagram("rat", "car"))
console.log('Expected: false' + '\n' + 'Output: ' + isAnagram("ccac", "aacc"))
