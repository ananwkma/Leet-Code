/*
 * https://leetcode.com/problems/isomorphic-strings/
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(1)
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

normalize = (str) => {
    str = str.split('')
    let dict = {}
    let converted = 0
    for (let i = 0; i < str.length; i++) {
        let key = str[i]
        if (!dict[key]) dict[key] = converted++
        str[i] = dict[key]
    }
    return str
}

compare = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}

var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false
    s = normalize(s)
    t = normalize(t)
    return compare(s, t)
};

console.log('Expected: true' + '\n' + 'Output: ' + isIsomorphic("egg", "add"))
console.log('Expected: false' + '\n' + 'Output: ' + isIsomorphic("foo", "bar"))
console.log('Expected: true' + '\n' + 'Output: ' + isIsomorphic("paper", "title"))
