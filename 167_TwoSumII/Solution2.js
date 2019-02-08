/*
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 *
 * Time: O(NlogN)
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
        let addend = numbers[i]
        let [hi, lo] = [numbers.length-1, 0]
        while (hi >= lo) {
            let mid = Math.floor((hi-lo)/2 + lo)
            let sum = (numbers[mid] + addend)
            if (sum === target) {
                if (i === mid) {
                    if (numbers[i-1] === numbers[i]) mid = numbers[i-1]
                    else if (numbers[i+1] === numbers[i]) mid = numbers[i+1]
                    else continue
                }
                res.push(i+1)
                res.push(mid+1)
                return res
            }
            else if (sum > target) hi = mid - 1
            else if (sum < target) lo = mid + 1
        }
    }
    return res
};

// console.log('Expected: [1,2]' + '\n' + 'Output: ' + twoSum([2,7,11,15], 9))
// console.log('Expected: [1,3]' + '\n' + 'Output: ' + twoSum([2,3,4], 6))
console.log('Expected: [2,3]' + '\n' + 'Output: ' + twoSum([5,25,75], 100))
