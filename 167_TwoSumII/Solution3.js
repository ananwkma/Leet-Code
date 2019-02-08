/*
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 *
 * Time: O(N)
 * Space: O(1)
 *
 */

// Solution3
// two pointers O(N)
// one pointer from front one pointer from back
// if sum is greater than target decrement from the back
// if sum is smaller than target increment from the front

var twoSum = function(numbers, target) {
    let res = []
    let [low, high] = [0, numbers.length-1]
    while (low < high) {
        let sum = numbers[low] + numbers[high]
        if (sum === target) {
            res.push(low+1)
            res.push(high+1)
            return res
        }
        if (sum > target) high--
        if (sum < target) low++
    }
    return res
};

console.log('Expected: [1,2]' + '\n' + 'Output: ' + twoSum([2,7,11,15], 9))
