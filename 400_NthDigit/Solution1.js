/*
 * https://leetcode.com/problems/nth-digit/
 *
 * @param {number} n
 * @return {number}
 *
 * Time: O(N)
 * Space: O(1)
 */

var findNthDigit = function(n) {
    if (n < 10) return n;
    let digits = 1;
	while ((n - (Math.pow(10, digits - 1) * 9) * digits) > 0) {
		n = n - (Math.pow(10, digits - 1) * 9) * digits
		digits++
	}
	// digits = number of digits selected number has
    let digit = (n % digits) - 1;
    // digit = which digit of the selected number we want
    if (digit < 0) return (n/digits - 1) % 10
    // if remainder is 0, get the digit in the one's place 
    n = Math.floor(n/digits) + Math.pow(10, digits - 1)
	// add back the lower bound to get our actual number 
	// ex: if our number is between 100-999, add 100
    return n.toString().charAt(digit) 
};

console.log('Expected: 2' + '\n' + 'Output: ' + findNthDigit(30))
console.log('Expected: 1' + '\n' + 'Output: ' + findNthDigit(10))
console.log('Expected: 0' + '\n' + 'Output: ' + findNthDigit(11))
console.log('Expected: 3' + '\n' + 'Output: ' + findNthDigit(3))
console.log('Expected: 3' + '\n' + 'Output: ' + findNthDigit(1000))
console.log('Expected: 2' + '\n' + 'Output: ' + findNthDigit(15))
console.log('Expected: 1' + '\n' + 'Output: ' + findNthDigit(28))