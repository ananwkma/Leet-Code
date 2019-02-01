/*
 * https://leetcode.com/problems/verifying-an-alien-dictionary/
 * 
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 *
 * Time: O(C) (total content of words) 
 * Space: O(N)
 */

convertToInt = (prev, curr, order) => {
	order = order.split('')
	prev = prev.split('')
	curr = curr.split('')
	let maxLen = Math.max(prev.length, curr.length)
	for (let i = 0; i < maxLen; i++) {
		prev[i] = (prev[i] ? order.indexOf(prev[i]) : -1)
		curr[i] = (curr[i] ? order.indexOf(curr[i]) : -1)
		return (prev[i] < curr[i]) ? true : false
	}
	return true
}

var isAlienSorted = function(words, order) {
	if (words.length < 2) return true

    for (let i = 1; i < words.length; i++) {
		if (!convertToInt(words[i-1], words[i], order)) return false
    }
    return true
};


console.log('Expected: true' + '\n' + 'Output: ' + isAlienSorted(["hello","leetcode"],"hlabcdefgijkmnopqrstuvwxyz"))
console.log('Expected: false' + '\n' + 'Output: ' + isAlienSorted(["word","world","row"],"worldabcefghijkmnpqstuvxyz"))
console.log('Expected: false' + '\n' + 'Output: ' + isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz"))
console.log('Expected: true' + '\n' + 'Output: ' + isAlienSorted(["kuvp","q"], "ngxlkthsjuoqcpavbfdermiywz"))
