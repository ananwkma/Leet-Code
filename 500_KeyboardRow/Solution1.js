/*
 * https://leetcode.com/problems/keyboard-row/
 * 
 * @param {string[]} words
 * @return {string[]}
 *
 * Time: O(C) (where C = number of total characters in all words)
 * Space: O(N)
 */

searchInSet = (wordArr, set) => {
	for (let i = 0; i < wordArr.length; i++) {
		if (!set.has(wordArr[i].toLowerCase())) return false
   	}
	return true
}

var findWords = function(words) {
    let row1 = new Set(['q','w','e','r','t','y','u','i','o','p'])
    let row2 = new Set(['a','s','d','f','g','h','j','k','l'])
    let row3 = new Set(['z','x','c','v','b','n','m'])
    let res = []
    words.map(word => {
    	let wordArr = word.split('')
    	if (row1.has(wordArr[0].toLowerCase())) searchInSet(wordArr, row1) ? res.push(word) : null
    	else if (row2.has(wordArr[0].toLowerCase())) searchInSet(wordArr, row2) ? res.push(word) : null
    	else if (row3.has(wordArr[0].toLowerCase())) searchInSet(wordArr, row3) ? res.push(word) : null
    })
    return res
};

console.log('Expected: ["Alaska", "Dad"]' + '\n' + 'Output: ' + findWords(["Hello","Alaska","Dad","Peace"]))
