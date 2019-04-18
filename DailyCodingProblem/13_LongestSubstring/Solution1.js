// Given an integer k and a string s, 
// find the length of the longest substring that 
// contains at most k distinct characters.

// For example, given s = "abcba" and k = 2, 
// the longest substring with k distinct characters is "bcb".

/*
*
* Time: O(N^2)
* Space: O(N)
*
*/

// double pointer scan
// a
//  ab 2
// b
//  bcb 3
// c 
//  cb 2
// b
//  ba 2
// a
//  a 1

const getCount = function(s, i, k) {
  let set = new Set();
  let count = 0;
  for (let j = 0; j < s.length; j++) {
    set.add(s[i+j]);
    if (set.size > k) return count;
    else count++;
  }
}

const longestSubstring = function(s, k) {
  let longest = 0;
  let maxSubstr = '';
  for (let i = 0; i < s.length; i++) {
    let cur = getCount(s, i, k);
    if (cur > maxSubstr.length) maxSubstr = s.substring(i, i+cur);
  }
  return maxSubstr;
};

console.log('Expected: bcb' + '\n' + 'Output: ' + longestSubstring("abcba", 2))
