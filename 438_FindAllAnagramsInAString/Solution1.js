/*
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * 
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 *
 * Time: O(NlogN)
 * Space: O(N)
 *
 */

// Solution1 
// two pointers, sorted p
// first pointer traverses every letter in s
// second pointer makes a subarray from i to length of p
// compare sorted subarray and i -> if true, add i to array

// Solution2
// make p into object of letter: number of instances
// traverse s until you find a letter in p
// put substring from index i to i + p.length into object
// compare objects, if equal then add i to array

compareArrays = (arr1, arr2) => {
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false
	}
	return true
}

var findAnagrams = function(s, p) {
    s = s.split('')
    p = p.split('').sort()
    let res = []
    for (let i = 0; i < s.length; i++) {
    	let subarray = s.slice(i, i+p.length).sort()
    	if (subarray.length === p.length && compareArrays(subarray, p)) res.push(i)
    }
    return res
};

console.log('Expected: [0, 6]' + '\n' + 'Output: ' + findAnagrams("cbaebabacd", "abc"))
console.log('Expected: [0, 1, 2]' + '\n' + 'Output: ' + findAnagrams("abab", "ab"))
