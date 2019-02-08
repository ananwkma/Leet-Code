/*
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 * 
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 *
 * Time: O(N)
 * Space: O(1)
 *
 */

// Solution1
// iteration
// go through array until reach something equal to or greater than target
// return that letter
// if cant find anything, return first letter


var nextGreatestLetter = function(letters, target) {
    for (let i = 0; i < letters.length; i++) {
    	if (letters[i] > target) return letters[i]
    }
	return letters[0]
};

console.log('Expected: c' + '\n' + 'Output: ' + nextGreatestLetter(["c", "f", "j"], "a"))
console.log('Expected: f' + '\n' + 'Output: ' + nextGreatestLetter(["c", "f", "j"], "c"))
console.log('Expected: f' + '\n' + 'Output: ' + nextGreatestLetter(["c", "f", "j"], "d"))
console.log('Expected: j' + '\n' + 'Output: ' + nextGreatestLetter(["c", "f", "j"], "g"))
console.log('Expected: c' + '\n' + 'Output: ' + nextGreatestLetter(["c", "f", "j"], "j"))
console.log('Expected: c' + '\n' + 'Output: ' + nextGreatestLetter(["c", "f", "j"], "k"))
