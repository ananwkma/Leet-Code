/*
 * https://leetcode.com/problems/longest-palindromic-substring/
 * 
 * @param {string} s
 * @return {string}
 *
 * Time: O(N^2)
 * Space: O(1)
 *
 */

// b a b a d
// b          X     1   b
//   a
// b   b
//       a    X     3   bab
//     b
//   a   a
// b       d  X     3   aba
//       a
//     b   d  X     1   a
//         d  X     1   d

// a b b a
// a          X     1   a
//   b        
// a   b      X     1   b
//     b
//   b   a    X     1   b
//       a    X     1   a

// a b b a
// a b        X     
//   b b      
// a b b a    X     4   abba
//     b a    X



var longestPalindrome = function(s) {
  let max = "";

  expandFromCenter = (left, right) => {
    while (s[left] === s[right] && s[left] && s[right]) {
      left--;
      right++;
    }
    return s.slice(left+1, right);
  }

  for (let i = 0; i < s.length; i++) {
    let check1 = expandFromCenter(i-1, i+1);
    let check2 = expandFromCenter(i, i+1);
    if (check1.length > max.length) max = check1; 
    if (check2.length > max.length) max = check2; 
  }

  return max; 
};

console.log('Expected: bab' + '\n' + 'Output: ' + longestPalindrome("babad"))
console.log('Expected: bb' + '\n' + 'Output: ' + longestPalindrome("cbbd"))
console.log('Expected: abba' + '\n' + 'Output: ' + longestPalindrome("abba"))
console.log('Expected: c' + '\n' + 'Output: ' + longestPalindrome("c"))
console.log('Expected: ' + '\n' + 'Output: ' + longestPalindrome(""))

