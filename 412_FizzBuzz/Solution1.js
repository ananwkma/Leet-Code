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

// Solution1 
// iterative
// go through each number from 0 to n 
// if i%3===0 && i%5===0 FizzBuzz
// if i%3===0 Fizz
// if i%5===0 Buzz

var fizzBuzz = function(n) {
	let res = []
    for (let i = 1; i <= n; i++) {
    	if ((i % 3 === 0) && (i % 5 === 0) ) res.push('FizzBuzz')
    	else if (i % 3 === 0) res.push('Fizz')
    	else if (i % 5 === 0) res.push('Buzz')
    	else res.push(i+'')
    }
	return res
};

console.log('Expected:  "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"' + '\n' + 'Output: ' + fizzBuzz(15))
