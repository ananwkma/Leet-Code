/*
 * https://leetcode.com/problems/reverse-string/
 * 
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 *
 * Time: O(N)
 * Space: O(N)
 *
 * Solution1
 */

// Solution1
// two arrays
// start at the end of an array, move backwards and add elements to new array
// abc -> c
// abc -> cb
// abc -> cba

// Solution2
// two pointers and swap
// one pointer at start of array one at end
// swap elements until meet at center
// abcde -> ebcda -> edcba

var reverseString = function(s) {
    let res = []
    for (let i = s.length-1; i >= 0; i--) {
    	res.push(s[i])
    }
    return res
};

console.log('Expected: ["o","l","l","e","h"]' + '\n' + 'Output: ' + reverseString(["h","e","l","l","o"]))
console.log('Expected: ["h","a","n","n","a","H"]' + '\n' + 'Output: ' + reverseString(["H","a","n","n","a","h"]))
