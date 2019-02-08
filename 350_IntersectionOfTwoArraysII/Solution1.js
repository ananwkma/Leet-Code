/*
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * Time: O(NlogN)
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


compare = (nums1, nums2) => {
	let j = 0
	let res = []
	for (let i = 0; i < nums1.length;) {
		if (nums1[i] === nums2[j]) {
			res.push(nums1[i])
			i++
			j++
		}
		if (nums2[j] < nums1[i]) j++
		if (nums2[j] > nums1[i]) i++
		if (nums2[j] === undefined || nums1[i] === undefined) break
	}
	return res
}

var intersect = function(nums1, nums2) {
    nums1.sort((a,b) => a-b)
    nums2.sort((a,b) => a-b)
    return compare(nums1, nums2)
};

// console.log('Expected: [2,2]' + '\n' + 'Output: ' + intersect([1,2,2,1], [2,2]))
// console.log('Expected: [4,9]' + '\n' + 'Output: ' + intersect([4,9,5], [9,4,9,8,4]))
// console.log('Expected: [4,6]' + '\n' + 'Output: ' + intersect([4,7,9,7,6,7], [5,0,0,6,1,6,2,2,4]))
// console.log('Expected: [1]' + '\n' + 'Output: ' + intersect([1,3,8,9,3], [1,0]))
// console.log('Expected: [1]' + '\n' + 'Output: ' + intersect([1,2], [1,1]))
console.log('Expected: [5,4,57,79,7,89,88,45,34,92,38,85,6,0,77,44,61]' + '\n' + 'Output: ' + intersect([61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81], [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]))
