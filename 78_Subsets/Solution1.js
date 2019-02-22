/*
 * https://leetcode.com/problems/subsets/
 * 
 * @param {number[]} nums
 * @return {number[][]}
 *
 * Time: O(2^N)
 * Space: O(2^N)
 *
 */

var subsets = function(nums) {
    let res = []

    dfs = (progress, remaining) => {
    	console.log(progress)

    	res.push(progress)
    	if (remaining.length === 0) return
    	for (let [i, entry] of remaining.entries()) {
    		let newProgress = [...progress, entry]
    		let newRemaining = [...remaining.slice(i+1)]
    		dfs(newProgress, newRemaining)
    	}
    }
    dfs([], nums)
    return res
};


/*
[1] [2,3]
	[1,2] [3]
		[1,2,3]
	[1,3] [2]
[2] [3,1]
	[2,3] [1]
[3]
*/

console.log('Expected: [[],[3],[2],[2,3],[1],[1,3],[1,2],[1,2,3]]' + '\n' + 'Output: ' + subsets([1,2,3]))
// console.log('Expected: ' + '\n' + 'Output: ' + subsets([1,2,3,4]))
// console.log('Expected: ' + '\n' + 'Output: ' + subsets([1,2,3,4,5,6,7,8,10,0]))
