// Given an integer k and a string s, 
// find the length of the longest substring that 
// contains at most k distinct characters.

// For example, given s = "abcba" and k = 2, 
// the longest substring with k distinct characters is "bcb".

/*
*
* Time: O(N)
* Space: O(N)
*
*/

// dictionary
// a
//  {a: 1, b: 1, c: 1} 2
// b 
//  {b: 2, c: 1, a: 1} 3

// curChar  count  dictSize  dict
// a        1      1         {a: 1}
// b        2      2         {a: 1, b: 1}
// c        2      3         {a: 1, b: 1, c: 1}
// b        3      2         {b: 2, c: 1}
// a        3      3         {b: 2, c: 1, a: 1}

const longestSubstring = function(s, k) {
  let count = 0;
  let maxSubstr = '';
  let dict = {};

  for (let i = 0; i < s.length; i++) {
    let curChar = s[i];
    dict[curChar] ? dict[curChar]++ : dict[curChar] = 1;
    count++;
    let dictSize = Object.keys(dict).length;

    if (dictSize > k || i === s.length - 1) {
      if (dictSize > k) count--;
      let firstCharIdx = i-count;
      let firstChar = s[firstCharIdx];

      if (count > maxSubstr.length) maxSubstr = s.substring(firstCharIdx, i);
      dict[firstChar]--;
      if (dict[firstChar] === 0) delete dict[firstChar];
    } 
  }
  return maxSubstr;
};

console.log('Expected: bcb' + '\n' + 'Output: ' + longestSubstring("abcba", 2))
