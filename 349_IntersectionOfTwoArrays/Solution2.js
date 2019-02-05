/*
 * https://leetcode.com/problems/intersection-of-two-arrays/
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 *
 * Time: O(NlogN)
 * Space: O(N)
 *
 */


function binarySearch(small, big) {
  let res = new Set()
  let lo = 0
  let hi = big.length - 1
  let mid = Math.floor((lo + hi) / 2)
  for (let i = 0; i < small.length; i++) {
	while (big[mid] !== small[i] && lo < hi) {
  	  if (big[mid] === small[i]) {
  	  	res.add(small[i])
  	  	break
  	  }
	  if (small[i] < big[mid]) hi = mid - 1
	  else lo = mid + 1
	  mid = Math.floor((lo + hi) / 2)
	}
  }
  return [...res]
}


var intersection = function(nums1, nums2) {
    if (nums1.length > nums2.length) { return intersection(nums2, nums1); }
    let res = new Set()
	nums1 = nums1.sort((a, b) => a-b);
    return binarySearch(nums1, nums2)
};


// binarySearch = (small, big) => {
// 	let res = new Set()
// 	for (let i = 0; i < small.length; i++) {
// 		let [hi, lo] = [big.length-1, 0]
// 		let mid = lo + Math.floor((hi - lo) / 2)
// 		while (hi >= lo) {
// 			if (small[i] === big[mid]) {
// 				res.add(small[i])
// 				break
// 			}
// 			if (small[i] > big[mid]) lo = mid + 1
// 			if (small[i] < big[mid]) hi = mid - 1
// 			mid = lo + Math.floor((hi - lo) / 2)
// 		}
// 	}
// 	return [...res]
// }


// var intersection = function(nums1, nums2) {
// 	if (nums1.length < nums2.length) return binarySearch(nums1, nums2.sort()) 
// 	else return binarySearch(nums2, nums1.sort())
// };

console.log('Expected: [61,45,85,89,5,77,92,38,7,34,44,57,4,6,88,0,79]' + '\n' + 'Output: ' + intersection ([61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81], [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]))
// console.log('Expected: [1,2]' + '\n' + 'Output: ' + intersection([1,1,2,2], [1,2]))
// console.log('Expected: [4,5,9]' + '\n' + 'Output: ' + intersection([4,9,5], [5,4,8,9,9]))
// console.log('Expected: [11]' + '\n' + 'Output: ' + intersection([11], [11]))
