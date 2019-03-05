/*
 * https://leetcode.com/problems/combination-sum/
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 *
 * Time: O(N^2)
 * Space: O(N^2)
 *
 */

var combinationSum = function(candidates, target) {
    let res = [];

	dfs = (progress, idx, sum) => {
		if (sum > target) return;
		if (sum === target) return res.push(progress);

		for (let i = idx; i < candidates.length; i++) {
			let curNum = candidates[i]
			let newProgress = [...progress, curNum];
			dfs(newProgress, idx, sum + curNum);
			idx++;
		}
	}

	dfs([], 0, 0);

	return res;
};

// [2,3,5], 8

// 2 									[2,3,5]
// 	2+2 								[2,3,5]
// 		2+2+2 							[2,3,5]
// 			2+2+2+2 <-- satisfies		[3,5]
// 			2+2+2+3 <-- cut off			[3,5]
// 		2+2+3							[3,5]
// 			2+2+3+3 <-- cut off			[3,5]
// 		2+2+5		<-- cut off			[3,5]
//	2+3									[3,5]
// 		2+3+3		<-- satisfies		[5]
//		2+3+5		<-- cut off			[5]
//	2+5									[5]
//		2+5+5		<-- cut off			[5]
// 3									[3,5]
//	3+3									[3,5]
//		3+3+3		<-- cut off			[3,5]
//	3+5				<-- satisfies		[5]
//		3+5+5		<-- cut off 		[5]
// 5									[5]
//	5+5				<-- cut off 		[5]


console.log('Expected: [[7],[2,2,3]]' + '\n' + 'Output: ' + combinationSum([2,3,6,7], 7))
console.log('Expected: [[2,2,2,2],[2,3,3],[3,5]]' + '\n' + 'Output: ' + combinationSum([2,3,5], 8))
console.log('Expected: [1]' + '\n' + 'Output: ' + combinationSum([1], 1))
console.log('Expected: [1,1,1,1], [1,1,2], [2,2]' + '\n' + 'Output: ' + combinationSum([1,2], 4))
