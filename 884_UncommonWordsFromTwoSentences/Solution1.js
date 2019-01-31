/*
 * https://leetcode.com/problems/uncommon-words-from-two-sentences/
 * 
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 *
 * Time: O(A+B)
 * Space: O(A+B)
 */
var uncommonFromSentences = function(A, B) {
    let combinedArr = (A + ' ' + B).split(' ')
    let uniqueSet = new Set()
    let dupeSet = new Set()
    combinedArr.map(word => {
    	if (!dupeSet.has(word) && !uniqueSet.has(word)) uniqueSet.add(word)
    	else {
    		if (uniqueSet.has(word)) uniqueSet.delete(word)
    		dupeSet.add(word)
    	}
    })
    return combinedArr.filter(word => {
    	if (uniqueSet.has(word)) return true
    	return false
    })
};

console.log('Expected: ["sweet","sour"]' + '\n' + 'Output: ' + uncommonFromSentences("this apple is sweet", "this apple is sour"))
console.log('Expected: ["banana"]' + '\n' + 'Output: ' + uncommonFromSentences("apple apple", "banana"))
