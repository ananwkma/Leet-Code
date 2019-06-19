/*
 * https://leetcode.com/problems/group-anagrams/
 * 
 * Params
 *
 * Time: O(NMlogM)
 * Space: O(NM)
 *
 */

// convert all strs to sorted strs
// add original str to sorted str dict
// print dict

var groupAnagrams = function(strs) {
  let dict = {};
  for (let str of strs) {
    let sorted = str.split("").sort().join("");
    if (!dict[sorted]) dict[sorted] = [];
    dict[sorted].push(str);
  }
  return Object.values(dict);
};

console.log('Expected: ["ate","eat","tea"], ["nat","tan"], ["bat"]' + '\n' + 
  'Output: ' + groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
