/*
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 * 
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 *
 * Time: O(logN)
 * Space: O(1)
 *
 */

// Solution2
// binsearch
// go to mid of array
// if mid is greater than target and (mid-1) is smaller than target, return mid
// if mid is smaller than target and (mid+1) is greater than target, return mid+1
// default return first element

var nextGreatestLetter = function(letters, target) {
	let [lo, hi] = [0, letters.length-1]
    while (lo < hi) {
    	let mid = Math.floor((hi+lo)/2)
    	if (letters[mid] > target) {
    		if (letters[mid-1] <= target) return letters[mid]
    		hi = mid - 1
    	}
    	else if (letters[mid] <= target) {
    		if (letters[mid+1] > target) return letters[mid+1] 
    		lo = mid + 1
    	}  
    }
	return letters[0]
};

console.log('Expected: c' + '\n' + 'Output: ' + nextGreatestLetter(["c", "f", "j"], "a"))
console.log('Expected: f' + '\n' + 'Output: ' + nextGreatestLetter(["c", "f", "j"], "c"))
console.log('Expected: f' + '\n' + 'Output: ' + nextGreatestLetter(["c", "f", "j"], "d"))
console.log('Expected: j' + '\n' + 'Output: ' + nextGreatestLetter(["c", "f", "j"], "g"))
console.log('Expected: c' + '\n' + 'Output: ' + nextGreatestLetter(["c", "f", "j"], "j"))
console.log('Expected: c' + '\n' + 'Output: ' + nextGreatestLetter(["c", "f", "j"], "k"))
console.log('Expected: n' + '\n' + 'Output: ' + nextGreatestLetter(["e","e","e","e","e","e","n","n","n","n"], "e"))