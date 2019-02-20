/*
 * https://leetcode.com/problems/fizz-buzz/
 * 
 * @param {number} n
 * @return {string[]}
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

// 1 -> 1
// 2 -> 2
// 3 -> Fizz
// 4 -> 4
// 5 -> Buzz
// ...15 -> FizzBuzz

// Solution3
// Dictionary
// Make a dictionary of divisibility conversions -> 3:'Fizz', 5:'Buzz'
// Check numbers from 1 to N if they are divisible by the keys in the dictionary
// If so, add to the result string

var fizzBuzz = function(n) {
	let res = []
	let dict = {3 : 'Fizz', 5 : 'Buzz'}
    for (let i = 1; i <= n; i++) {
    	let str = ''
    	for (let key of Object.keys(dict)) {
    		if (i % key === 0) str += dict[key] 
    	}
    	if (str === '') str += i
    	res.push(str)
    }
	return res
};

console.log('Expected:  "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"' + '\n' + 'Output: ' + fizzBuzz(15))
