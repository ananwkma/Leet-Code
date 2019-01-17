/*
 * https://leetcode.com/problems/third-maximum-number/
 *
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O()
 * Space: O()
 */

var thirdMax = function(nums) {
	let numSet = new Set()
    let [max, max2, max3] = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]
    nums.map(num => {
    	if (!numSet.has(num)) {
    		numSet.add(num)
	    	if (num > max) {
	    		max3 = max2
	    		max2 = max
	    		max = num
	    	}
	    	else if (num > max2) {
	    		max3 = max2
	    		max2 = num
	    	}
	    	else if (num > max3) {
	    		max3 = num
	    	}
    	}	
    })
    if (max3 === 0) return max
    return max3
};

console.log('Expected: 1' + '\n' + 'Output: ' + thirdMax([3, 2, 1]))
console.log('Expected: 2' + '\n' + 'Output: ' + thirdMax([1, 2]))
console.log('Expected: 1' + '\n' + 'Output: ' + thirdMax([2, 2, 3, 1]))