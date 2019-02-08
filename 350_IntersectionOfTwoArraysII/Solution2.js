/*
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * Time: O(N^2)
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

objectify = (arr, obj) => {
	for (let i = 0; i < arr.length; i++) {
		let key = arr[i]
		obj[key] ? obj[key]++ : (obj[key] = 1)
	}
	return obj
}

compareObjects = (small, big) => {
	let res = []
	for (let key of Object.keys(small)) {
		if (big[key]) {
			if (small[key] > big[key]) multipush(big[key], key, res)
			else multipush(small[key], key, res)
		}
	}
	return res
}

multipush = (num, key, arr) => {
	for (let i = 0; i < num; i++) {
		arr.push(key)
	}
}

var intersect = function(nums1, nums2) {
	let obj1 = {}
	let obj2 = {}
	obj1 = objectify(nums1, obj1)
	obj2 = objectify(nums2, obj2)
	return (nums1.length < nums2.length) ? compareObjects(obj1, obj2) : compareObjects(obj2, obj1)
};

// console.log('Expected: [2,2]' + '\n' + 'Output: ' + intersect([1,2,2,1], [2,2]))
// console.log('Expected: [4,9]' + '\n' + 'Output: ' + intersect([4,9,5], [9,4,9,8,4]))
// console.log('Expected: [4,6]' + '\n' + 'Output: ' + intersect([4,7,9,7,6,7], [5,0,0,6,1,6,2,2,4]))
console.log('Expected: [1]' + '\n' + 'Output: ' + intersect([1,3,8,9,3], [1,0]))
