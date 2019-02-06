/*
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * 
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

// Solution1 
// two pointers, sorted p
// first pointer traverses every letter in s
// second pointer makes a subarray from i to length of p
// compare sorted subarray and i -> if true, add i to array

// Solution2
// make p into objects of (letter : number of instances)
// traverse s until you find a letter in p
// put substring from index i to i + p.length into object
// compare objects, if equal then add i to array

objectify = (str, obj) => {
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        obj[char] ? obj[char]++ : (obj[char] = 1)
    }
}

compareObjs = (str, pat) => {
    for (let key of Object.keys(pat)) {
        if (pat[key] !== str[key]) return false
    }
    return true
}

var findAnagrams = function(s, p) {
    let pObj = {}
    let res = []
    objectify(p, pObj)
    for (let i = 0; i < s.length; i++) {
        let sObj = {}
        objectify(s.substring(i, i+p.length), sObj)
        if (compareObjs(sObj, pObj)) res.push(i)
    }
    return res
};

console.log('Expected: [0, 6]' + '\n' + 'Output: ' + findAnagrams("cbaebabacd", "abc"))
console.log('Expected: [0, 1, 2]' + '\n' + 'Output: ' + findAnagrams("abab", "ab"))
