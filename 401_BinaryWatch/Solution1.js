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
    
};

console.log('Expected: ' + '\n' + 'Output: ' + readBinaryWatch())

// iterate through 0-10
// if i > 3, i - 4 for value and add it to minutes not hours
// 1:01 = 2^0 + ':' + '0' + 2^(4-4)
// set of times
// recursive function takes in how many lights are left
