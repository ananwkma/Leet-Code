/*
 * https://leetcode.com/problems/longest-palindromic-substring/
 * 
 * @param {string} s
 * @return {string}
 *
 * Time: O(N^3)
 * Space: O(N)
 *
 */


// ''               len: 0
// b        yes     len: 1
// ba       no      
// bab      yes     len: 3
// baba     no
// babad    no
//  a       yes     len: 1
//  ab      no
//  aba     yes     len: 3
//  abad    no      
//   b      yes     len: 1
//   ba     no      
//   bad    no      
//    a     yes     len: 1
//    ad    no      
//     d    yes     len: 1


checkPalindrome = (str) => {
    for (let i = 0; i < str.length/2; i++) {
        if (str[i] !== str[str.length-1-i]) return false;
    }
    return true;
} 

var longestPalindrome = function(s) {
    let longestSubString = '';

    dfs = (progress, idx) => {
        if ((progress.length > longestSubString.length) && checkPalindrome(progress)) {
            longestSubString = progress;
        }
        if (idx >= s.length) return;
        dfs(progress+s[idx], idx+1);
    }

    for (let i = 0; i < s.length; i++) {
        dfs('', i);
    }

    return longestSubString;
};

console.log('Expected: bab' + '\n' + 'Output: ' + longestPalindrome("babad"))
console.log('Expected: bb' + '\n' + 'Output: ' + longestPalindrome("cbbd"))

