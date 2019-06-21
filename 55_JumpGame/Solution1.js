/*
 * https://leetcode.com/problems/jump-game/
 * 
 * @param {number[]} nums
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(1)
 *
 */

// [3,2,1,0,4]
// 3    3     1     0     4
// ^ 
// [3]  [2]  [1]   [0]
//      [3]  [2]   [1]   [0]
//
// [3]  [3]  [2]   [1]   [0]
//      3>2  2>1   1>0   end
//
// save temp digit (cur-1) 
// increment, compare temp to cur
// save max(temp, cur) 
// repeat until idx === end (true) or temp and cur are both 0 (false)

var canJump = function(nums) {
  let temp = 0;
  for (let i = 0; i < nums.length-1; i++) {
    if (nums[i] === 0 && temp === 0) return false;
    temp = Math.max(nums[i], temp) - 1;
  }
  return true;
};

console.log('Expected: true' + '\n' + 'Output: ' + canJump([2,3,1,1,4]))
console.log('Expected: false' + '\n' + 'Output: ' + canJump([3,2,1,0,4]))
console.log('Expected: true' + '\n' + 'Output: ' + canJump([3,3,1,0,4]))
