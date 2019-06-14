/*
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * @param {string} s
 * @return {number}
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

// 01234567 idx
// abcabcbb word
//
//        count   max   ptr1    ptr2    obj
// a      1       1     0       0       {a:0}
// ab     2       2     0       1       {a:0, b:1}       
// abc    3       3     0       2       {a:0, b:1, c:2}
// abca   X       3     0       3       {a:0, b:1, c:2}       a 0+1 => set ptr1 to idx 1
// bca    3       3     1       3       {a:3, b:1, c:2}
// bcab   X       3     1       4       {a:3, b:1, c:2}       b 1+1 => set ptr1 to idx 2
// cab    3       3     2       4       {a:3, b:4, c:2}
// cabc   X       3     2       5       {a:3, b:4, c:2}       c 2+1 => set ptr1 to idx 3
// abc    3       3     3       5       {a:3, b:4, c:5}
// abcb   X       3     3       6       {a:3, b:4, c:5}       b 4+1 => set ptr1 to idx 5
// cb     2       3     5       6       {a:3, b:6, c:5}
// cbb    X       3     5       7       {a:3, b:6, c:5}       b 6+1 => set ptr1 to idx 7
// b      1       3     7       7       {a:3, b:7, c:5}

// max = 3

// two pointers
// one pointer selects first char
// one pointer adds all subsequent chars 
// add to obj of {char: lastIdx}
// if key exists already, update value to curIdx
// move ptr1 up to oldIdx+1
// return max


var lengthOfLongestSubstring = function(s) {
  let max = 0;
  let windowStart = 0;
  let windowCharsMap = {};

  for (let i = 0; i < s.length; i++) {
    const endChar = s[i];
    if (windowCharsMap[endChar] >= windowStart) {
      windowStart = windowCharsMap[endChar] + 1;
    }
    windowCharsMap[endChar] = i;
    max = Math.max(max, i - windowStart + 1)
  }

  return max;
};

// console.log('Expected: 3' + '\n' + 'Output: ' + lengthOfLongestSubstring("abcabcbb"));
// console.log('Expected: 1' + '\n' + 'Output: ' + lengthOfLongestSubstring("bbbbb"));
// console.log('Expected: 3' + '\n' + 'Output: ' + lengthOfLongestSubstring("pwwkew"));
// console.log('Expected: 1' + '\n' + 'Output: ' + lengthOfLongestSubstring(" "));
// console.log('Expected: 2' + '\n' + 'Output: ' + lengthOfLongestSubstring("aab"));
console.log('Expected: 2' + '\n' + 'Output: ' + lengthOfLongestSubstring("abba"));

