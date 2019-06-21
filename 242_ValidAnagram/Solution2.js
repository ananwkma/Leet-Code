/*
 * https://leetcode.com/problems/valid-anagram/
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

objectify = (str, obj) => {
	for (let i = 0; i < str.length; i++) {	
		let key = str.charAt(i)
  	obj[key] ? obj[key]++ : obj[key] = 1;
  }
}

comapreObjects = (sObj, tObj) => {
	for (let entry of Object.keys(sObj)) {
		if (sObj[entry] !== tObj[entry]) return false
	}
	return true
}

var isAnagram = function(s, t) {
	if (s.length !== t.length) return false
	let sObj = {}
	let tObj = {}
	objectify(s, sObj)
	objectify(t, tObj)
	return comapreObjects(sObj, tObj)
};

console.log('Expected: false' + '\n' + 'Output: ' + isAnagram("a", "ab"))
console.log('Expected: true' + '\n' + 'Output: ' + isAnagram("anagram", "nagaram"))
console.log('Expected: false' + '\n' + 'Output: ' + isAnagram("rat", "car"))
