/*
 * https://leetcode.com/problems/permutations/
 * 
 * @param {number[]} nums
 * @return {number[][]}
 *
 * Time: O(N!)
 * Space: O(N!)
 *
 */
var permute = function(nums) {
    let res = []

    dfs = (progress, remaining) => {
    	if (remaining.length === 0) return res.push(progress)
    	for (let [i, entry] of remaining.entries()) {
    		let newProgress = [...progress, entry]
    		let newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)]
    		dfs(newProgress, newRemaining)
    	}
    }
    dfs([], nums)
    return res
};


// ''
// 1
//	12
//	  123
//	13
//    132
// 2
// 	21
//	  213
//	23
//	  231
// 3
//	31
//	  312
//	32
//	  321

console.log('Expected: [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]' + '\n' + 'Output: ' + permute([1,2,3]))
// console.log('Expected: [1,2], [2,1]' + '\n' + 'Output: ' + permute([1,2]))
