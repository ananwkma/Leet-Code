/*
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

// Solution1
// sort and two pointers
// sort both arrays and have two pointers, one for each array 
// have both pointers catch up to each other until they are equal 
// put value into result array if equal

// Solution2
// put all contents of both arrays into objects of key : (number of occurrences)
// compare objects and return the result

// Solution3
// put arr1 into obj value : frequency 
// take values of arr2 and compare to obj
// if match, decrement frequency of value and add to result array


var intersect = function(nums1, nums2) {
	let map = {}, res = []
	for (let i = 0; i < nums1.length; i++) {
		map[nums1[i]] ? map[nums1[i]]++ : (map[nums1[i]] = 1)
	}
	for (let i = 0; i < nums2.length; i++) {
		if (map[nums2[i]] > 0) {
			map[nums2[i]]--
			res.push(nums2[i])
		}
	}
	return res
};

console.log('Expected: [2,2]' + '\n' + 'Output: ' + intersect([1,2,2,1], [2,2]))
console.log('Expected: [4,9]' + '\n' + 'Output: ' + intersect([4,9,5], [9,4,9,8,4]))
console.log('Expected: [4,6]' + '\n' + 'Output: ' + intersect([4,7,9,7,6,7], [5,0,0,6,1,6,2,2,4]))
console.log('Expected: [1]' + '\n' + 'Output: ' + intersect([1,3,8,9,3], [1,0]))
