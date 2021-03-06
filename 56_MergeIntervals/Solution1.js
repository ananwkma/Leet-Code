/*
 * https://leetcode.com/problems/merge-intervals/
 * 
 * @param {number[][]} intervals
 * @return {number[][]}
 *
 * Time: O(NlogN)
 * Space: O(N)
 *
 */


// [1,3] [2,6] [8,10] [15,18]
//
// [1,3]
// 3 > 2 && 3 < 6
// [1,6]
// 6 < 8 && 6 < 10
// [1,6] [8,10]
// 10 < 15 && 10 < 18
// [1,6] [8, 10] [15, 18]




var merge = function(intervals) {
  let res = [];
  if (intervals.length === 0) return res;
  intervals.sort((a,b) => {return a[0]-b[0]});
  let combined = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i];
    if (combined[1] >= cur[0] && combined[1] <= cur[1]) combined = [combined[0], cur[1]];
    else if (combined[1] >= cur[0] && combined[1] >= cur[1]) combined = [combined[0], combined[1]];
    else {
      res.push(combined);
      combined = cur; 
    }
  }

  res.push(combined);

  return res; 
};

// console.log('Expected: [[1,6],[8,10],[15,18]]' + '\n' + 'Output: ' + merge([[2,6],[8,10],[1,3],[15,18]]))
// console.log('Expected: [[1,5]]' + '\n' + 'Output: ' + merge([[1,4],[4,5]]))
console.log('Expected: [[1,4]]' + '\n' + 'Output: ' + merge([[1,4],[2,3]]))
