/*
 * https://leetcode.com/problems/valid-anagram/
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * Time: O(NlogN)
 * Space: O(1)
 *
 */

var isAnagram = function(s, t) {
  return t.split('').sort().join('') === s.split('').sort().join('');
};

console.log('Expected: false' + '\n' + 'Output: ' + isAnagram("a", "ab"))
console.log('Expected: true' + '\n' + 'Output: ' + isAnagram("anagram", "nagaram"))
console.log('Expected: false' + '\n' + 'Output: ' + isAnagram("rat", "car"))
