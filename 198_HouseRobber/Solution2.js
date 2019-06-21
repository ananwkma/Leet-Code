/*
 * https://leetcode.com/problems/house-robber/
 * 
 * @param {number[]} 
 * @return {number}
 *
 * Time: O(N)
 * Space: O(1)
 *
 */

// 1 3      4
// 1 1      2
// 2 1      3

// maxLoot [1, 2, 4, 4]

// [2,7,9,3,1]
// maxLoot [2,7,11,11,12]

// [10,2,3,10,1,2]
// maxLoot [10,10,13,20,20,22]

// idx 1 is 1
// idx 2 is max (1, 2)
// at idx i, max(i-1 , i + i-2)


var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let last = 0;
  let lastlast = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) lastlast = nums[i];
    else if (i === 1) last = (Math.max(nums[i], nums[i-1]));
    else {
      let temp = last;
      last = (Math.max(nums[i] + lastlast, last));
      lastlast = temp;
    }
  }
  return last;
};

console.log('Expected: 4' + '\n' + 'Output: ' + rob([1,2,3,1]))
console.log('Expected: 12' + '\n' + 'Output: ' + rob([2,7,9,3,1]))
console.log('Expected: 22' + '\n' + 'Output: ' + rob([10,2,3,10,1,2]))
console.log('Expected: 1' + '\n' + 'Output: ' + rob([1]))
console.log('Expected: 0' + '\n' + 'Output: ' + rob([]))
