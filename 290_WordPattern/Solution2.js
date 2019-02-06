/*
 * https://leetcode.com/problems/word-pattern/
 * 
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 *
 * Time: O(NlogN)
 * Space: O(1)
 *
 * Solution1
 */

// Solution1
// objects of a: dog b: cat
// set to keep track of values to make sure no duplicate values (dog dog dog dog abba)
// match key compare values if false return false

// Solution2
// put both into arrays and sort
// var for cur pattern and cur str
// while cur pattern is the same, check if cur str is same at same index
// if false return false

// SOLUTION 2 DOES NOT WORK BECAUSE ORDER MATTERS


var wordPattern = function(pattern, str) {
	pattern = pattern.split('').sort()
	str = str.split(' ').sort()
	if (str.length !== pattern.length) return false
	let [cPat, cStr] = ['', '']
	for (let i = 0; i < str.length; i++) {
		if (pattern[i] !== cPat && str[i] !== cStr) { 
			cPat = pattern[i]
			cStr = str[i]
		}
		else if (pattern[i] !== cPat && str[i] === cStr) return false
		else if (pattern[i] === cPat && str[i] !== cStr) return false
	}
	return true
};

// console.log('Expected: true' + '\n' + 'Output: ' + wordPattern("abba", "dog cat cat dog"))
// console.log('Expected: false' + '\n' + 'Output: ' + wordPattern("abba", "dog cat cat fish"))
// console.log('Expected: false' + '\n' + 'Output: ' + wordPattern("aaaa", "dog cat cat dog"))
// console.log('Expected: false' + '\n' + 'Output: ' + wordPattern("abba", "dog dog dog dog"))
console.log('Expected: false' + '\n' + 'Output: ' + wordPattern("aba", "dog cat cat"))