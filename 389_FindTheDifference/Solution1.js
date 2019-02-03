/*
 * https://leetcode.com/problems/find-the-difference/
 * 
 * @param {string} s
 * @param {string} t
 * @return {character}
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

compare = (obj1, obj2) => {
	for (let key of Object.keys(obj2)) {
		if (obj1[key] === undefined || obj1[key] !== obj2[key]) return key
	}
}

convertIntoObjects = (str, obj) => {
	str = str.split('')
	for (let char of str) {
		obj[char] ? obj[char]++ : (obj[char] = 1)
	}
}

var findTheDifference = function(s, t) {
	let sObj = {}
	let tObj = {}
	convertIntoObjects(s, sObj)
	convertIntoObjects(t, tObj)
	return compare(sObj, tObj)
};

console.log('Expected: e' + '\n' + 'Output: ' + findTheDifference("abcd", "abcde"))
