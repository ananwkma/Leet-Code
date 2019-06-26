/*
 * https://baihuqian.github.io/2018-07-26-meeting-rooms/
 * 
 * Params
 *
 * Time: O(NlogN)
 * Space: O(1)
 *
 */


// [2,4] [7,10] [3,11]
// 4 < 7 && 4 < 10
// 

const canAttendMeetings = function(times) {
  times.sort((a,b) => a[0]-b[0]);
  if (times.length < 2) return true;

  for (let i = 1; i < times.length; i++) {
    const cur = times[i];
    const last = times[i-1]
    if (last[1] > cur[0]) return false;
  }
  return true;
};

console.log('Expected: false' + '\n' + 'Output: ' + canAttendMeetings([[0,30],[5,10],[15,20]]))
console.log('Expected: true' + '\n' + 'Output: ' + canAttendMeetings([[7,10],[2,4]]))
console.log('Expected: false' + '\n' + 'Output: ' + canAttendMeetings([[7,10],[2,4],[3,11]]))
