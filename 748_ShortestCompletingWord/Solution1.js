/*
 * https://leetcode.com/problems/shortest-completing-word/
 * 
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 *
 * Time: O(AB) (A = letters in plate, B = total characters in all words)
 * Space: O(1)
 *
 */

searchLetterInWord = (letter, word, set) => { // if there are letters that aren't already matched, return false
	for (let i = 0; i < word.length; i++) {
		if (letter === word[i] && !set.has(i)) {
			set.add(i)
			return true
		}
		else if (i === word.length-1) return false
	}
}

var shortestCompletingWord = function(licensePlate, words) {
    licensePlate = licensePlate.split(/[ 1234567890]/).join('').toLowerCase() // turn licenseplate into lowercase letters only
    let [idx, minLen] = [0, Infinity]

    for (let i = 0; i < words.length; i++) {
    	let usedIdx = new Set() // indices of letters that matched

    	for (let j = 0; j < licensePlate.length; j++) {
    		if (!searchLetterInWord(licensePlate.charAt(j), words[i], usedIdx)) break // if word is missing a letter, go to next word
    		else if ((j === licensePlate.length-1) && (words[i].length < minLen)) { // if word matches with plate, check if it's the shortest word
    			minLen = words[i].length
    			idx = i
    		}
        }
    }
    return words[idx] // return shortest matching word
};

console.log('Expected: steps' + '\n' + 'Output: ' + shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]))
console.log('Expected: pest' + '\n' + 'Output: ' + shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"]))
