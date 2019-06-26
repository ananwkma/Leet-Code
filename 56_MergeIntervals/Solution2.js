/*
 * https://leetcode.com/problems/merge-intervals/
 * 
 * @param {number[][]} intervals
 * @return {number[][]}
 *
 * Time: O(NlogN)
 * Space: O(1)
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
  if (intervals.length === 0) return res;
  intervals.sort((a,b) => {return a[0]-b[0]});

  const res = [intervals[0]]

  for (let i = 0; i < intervals.length; i++) {
    const cur = intervals[i];
    const last = res[res.length - 1];
    // console.log('cur: ', cur, 'last: ', last, 'res: ', res)

    if (cur[0] <= last[1]) last[1] = Math.max(cur[1], last[1]);
    else res.push(cur);
  }

  return res; 
};

console.log('Expected: [[1,6],[8,10],[15,18]]' + '\n' + 'Output: ' + merge([[2,6],[8,10],[1,3],[15,18]]))
console.log('Expected: [[1,6],[8,10],[15,18]]' + '\n' + 'Output: ' + merge([[2,6],[8,10],[1,3],[15,18],[19,20],[20,21]]))
console.log('Expected: [[1,5]]' + '\n' + 'Output: ' + merge([[1,4],[4,5]]))
console.log('Expected: [[1,4]]' + '\n' + 'Output: ' + merge([[1,4],[2,3]]))
