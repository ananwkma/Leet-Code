/*
 * https://leetcode.com/problems/binary-watch/
 * 
 * @param {number} num
 * @return {string[]}
 *
 * Time: O()
 * Space: O()
 *
 */

var readBinaryWatch = function(num) {
    let set = new Set()

    recursion = (num) => {
    	let hour = 0
    	let minute = 0
    	for (let i = 0; i < 10; i++) {
    		
    	}
    }

    let res = [...set]
    return res
};

console.log('Expected: ' + '\n' + 'Output: ' + readBinaryWatch())

// when 0 
// 0:00
// var for hours and for min, init at 0 
//
// iterate through 0-10
// if i > 3, i - 4 for value and add it to minutes not hours
// 1:01 = 2^0 + ':' + '0' + 2^(4-4)
// set of times
// recursive function takes in how many lights are left
