/*
 * https://leetcode.com/problems/verifying-an-alien-dictionary/
 * 
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 *
 * Time: O(C) (total content of words)
 * Space: O(1)
 */

convertToInt = (prev, curr, order) => {
	let maxLen = Math.max(prev.length, curr.length)
	let [prevVal, currVal] = [0, 0]
	for (let i = 0; i < maxLen; i++) {
		 prevVal = (prev.charAt(i) ? order.indexOf(prev.charAt(i)) : -1)
		 currVal = (curr.charAt(i) ? order.indexOf(curr.charAt(i)) : -1)
		return (prevVal < currVal) ? true : false
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
