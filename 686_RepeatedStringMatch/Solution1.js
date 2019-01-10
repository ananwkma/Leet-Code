/*
 * https://leetcode.com/problems/repeated-string-match/
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
	let str = ''
	for (let i = 1; str.length <= (A.length + B.length); i++) {
		str += A
		if(str.includes(B)) return i
	}
	return -1
};

const testA = "abcd"
const testB = "cdabcdab"
console.log('Expected: 3' + '\n' + 'Output: ' + repeatedStringMatch(testA, testB))