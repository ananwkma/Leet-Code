/*
 * https://leetcode.com/problems/self-dividing-numbers/
 *
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 *
 * (A = left, B = right, C = B-A)
 * Time: O(ClogB)
 * Space: O(C)
 */

var selfDividingNumbers = function(left, right) {
	let resultArray = []
    for (left; left <= right; left++) {
    	let eval = left + ''
    	for (let i = 0; i < eval.length; i++) {
    		if (eval[i] === 0 || (eval % eval[i] !== 0)) break
    		else if (eval % eval[i] === 0 && i === eval.length-1) resultArray.push(eval)
    	}
    }
    return resultArray
};

console.log('Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]' + '\n' + 'Output: ' + selfDividingNumbers(1,22))
