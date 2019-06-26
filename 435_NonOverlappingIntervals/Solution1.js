/*
 * https://leetcode.com/problems/non-overlapping-intervals/
 * 
 * @param {number[][]} intervals
 * @return {number}
 *
 * Time: O(NlogN)
 * Space: O(N)
 *
 */


// sort by first
// [1,5] [2,4] [3,5] [4,5] [5,6]
// if intersect, keep lower end
// [1,5] [2,4] => 5 > 4 => [2,4]
// [2,4] [3,5] => 5 > 4 => [2,4]
// [2,4] [4,5] => [2,4] [4,5]
// [4,5] [5,6] => [2,4] [4,5] [5,6]


intersect = (cur, prev) => {
  if (prev[1] > cur[0]) return true;
  return false;
}

var eraseOverlapIntervals = function(intervals) {
  if (!intervals.length) return 0;
  intervals.sort((a,b) => a[0] - b[0]);
  let res = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i];
    let prev = res[res.length-1];
    if (intersect(cur, prev)) {
      res[res.length-1] = cur[1] < prev[1] ? cur : prev;
    }
    else res.push(cur);
  }
  return intervals.length - res.length;
};

console.log('Expected: 1' + '\n' + 'Output: ' + eraseOverlapIntervals([[1,3],[2,3],[3,4],[1,2]]))
console.log('Expected: 2' + '\n' + 'Output: ' + eraseOverlapIntervals([[1,2],[1,2],[1,2]]))
console.log('Expected: 2' + '\n' + 'Output: ' + eraseOverlapIntervals([[1,5],[2,4],[3,100],[4,5],[5,6]]))
