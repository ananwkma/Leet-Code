/*
 * https://leetcode.com/problems/intersection-of-two-arrays/
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

matchingKeys = (set1, set2) => {
	let res = []
	set1.forEach(entry => {
		if (set1.has(entry) && set2.has(entry)) res.push(entry)
	})
	return res
}

convertIntoObject = (arr, set) => {
	for (let i = 0; i < arr.length; i++) {
		set.add(arr[i])
	}
}

var intersection = function(nums1, nums2) {
    let set1 = new Set()
    let set2 = new Set()
    convertIntoObject(nums1, set1)
    convertIntoObject(nums2, set2)
    return matchingKeys(set1, set2)
};

console.log('Expected: [2]' + '\n' + 'Output: ' + intersection([1,2,2,1], [2,2]))
console.log('Expected: [9,4]' + '\n' + 'Output: ' + intersection([4,9,5], [9,4,9,8,4]))
