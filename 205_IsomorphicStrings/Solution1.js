/*
 * https://leetcode.com/problems/isomorphic-strings/
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

// Solution1
// if s.length !== t.length return false
// Object of key:value for every letter in s and t, set of values already used
// if key exists check if values match -- no then false 
// if key doesn't exist check if value is already in set -- yes then false

// Solution2
// if s.length !== t.length return false
// normalize s and t then check if equal
// normalize function takes in a string and makes a dictionary and then converts
//      the string into an array of numbers based on the pattern
// compare the normalized strings 

var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false

    let obj = {}
	let set = new Set()

    for (let i = 0; i < s.length; i++) {

    	let key = s.charAt(i)
    	let char = t.charAt(i)

    	if (obj[key] && (obj[key] !== char)) return false
    	else if (!obj[key]) {
    		if (set.has(char)) return false
    		else {
    			obj[key] = char
    			set.add(char)
    		}
    	}
    }
    return true
};

console.log('Expected: true' + '\n' + 'Output: ' + isIsomorphic("egg", "add"))
console.log('Expected: false' + '\n' + 'Output: ' + isIsomorphic("foo", "bar"))
console.log('Expected: true' + '\n' + 'Output: ' + isIsomorphic("paper", "title"))
