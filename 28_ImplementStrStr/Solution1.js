/*
 * https://leetcode.com/problems/implement-strstr/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

console.log('Expected: 1' + '\n' + 'Output: ' + strStr("hello", "ll"))