/*
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 *
 * Time: O(N^2)
 * Space: O(1)
 *
 */

// Solution1
// two pointers O(N^2)
// one pointer (i) iterate through array
// second poitner iterate through starting from i 
// add two pointers, if equal target -> push to result array

// Solution2
// pointer and bin search O(NlogN)
// one pointer (i) iterate through array
// second pointer search
// add two pointers, if equal target -> push to result array

var twoSum = function(numbers, target) {
    let res = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            if ((numbers[i] + numbers[j]) === target) {
                res.push(i+1)
                res.push(j+1)
            }
        }
    }
    return res
};

console.log('Expected: [1,2]' + '\n' + 'Output: ' + twoSum([2,7,11,15], 9))
