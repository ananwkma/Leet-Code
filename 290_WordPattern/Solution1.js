/*
 * https://leetcode.com/problems/word-pattern/
 * 
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(N)
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


var wordPattern = function(pattern, str) {
	pattern = pattern.split('')
	str = str.split(' ')
	if (pattern.length !== str.length) return false
    let values = new Set()
	let obj = {}
	for (let i = 0; i < pattern.length; i++) {
		let [cPat, cStr] = [pattern[i], str[i]]
		if (!obj[cPat]) {
			if (values.has(cStr)) return false
			obj[cPat] = cStr
		}
		else if (obj[cPat] !== cStr) return false
		values.add(cStr)
	}
	return true
};

console.log('Expected: true' + '\n' + 'Output: ' + wordPattern("abba", "dog cat cat dog"))
console.log('Expected: false' + '\n' + 'Output: ' + wordPattern("abba", "dog cat cat fish"))
console.log('Expected: false' + '\n' + 'Output: ' + wordPattern("aaaa", "dog cat cat dog"))
console.log('Expected: false' + '\n' + 'Output: ' + wordPattern("abba", "dog dog dog dog"))