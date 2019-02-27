/*
 * https://leetcode.com/problems/combination-sum/
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 *
 * Time: O()
 * Space: O()
 *
 */

// var combinationSum = function(candidates, target) {
//     let res = [];
//     let j = 0

// 	dfs = (progress, c, sum) => {
// 		console.log(progress,c,sum,j)
// 		if (sum === target) {
// 			j++;
// 			return res.push(progress);
// 		}
// 		if (sum > target || c.length === 0) return;
// 		for (let i = j; i < candidates.length; i++) {
// 			let newProgress = [...progress, c[i]];
// 			dfs(newProgress, c, sum + c[i]);
// 		}
// 	}
// 	dfs([], candidates, 0);
// 	return res;
// };


var combinationSum = function(candidates, target) {
  let res = [];
  let dfs = (progress, currIdx, sum) => {
    if (sum === target) { return res.push(progress); }
    if (sum > target || currIdx === candidates.length) return;
    for (let i = currIdx; i < candidates.length; i++) {
      let newProgress = [...progress, candidates[i]];
      let newC = i
      dfs(newProgress, newC, sum + candidates[i]);
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
