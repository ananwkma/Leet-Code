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
    s = s.split('').sort()
    t = t.split('').sort()
    if (s.length !== t.length) return false
    for (let i = 0; i < s.length; i++) {
    	if (s[i] !== t[i]) return false
    }
	return true
};

console.log('Expected: true' + '\n' + 'Output: ' + isAnagram("anagram", "nagaram"))
console.log('Expected: false' + '\n' + 'Output: ' + isAnagram("rat", "car"))
