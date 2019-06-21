/*
 * https://leetcode.com/problems/house-robber/
 * 
 * @param {number[]} 
 * @return {number}
 *
 * Time: O(N)
 * Space: O(N)
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
  let maxLoot = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) maxLoot.push(nums[i]);
    else if (i === 1) maxLoot.push(Math.max(nums[i], nums[i-1]));
    else maxLoot.push(Math.max(nums[i] + maxLoot[i-2], maxLoot[i-1]));
  }
  return maxLoot[maxLoot.length-1];
};

console.log('Expected: 4' + '\n' + 'Output: ' + rob([1,2,3,1]))
console.log('Expected: 12' + '\n' + 'Output: ' + rob([2,7,9,3,1]))
console.log('Expected: 22' + '\n' + 'Output: ' + rob([10,2,3,10,1,2]))
console.log('Expected: 1' + '\n' + 'Output: ' + rob([1]))
console.log('Expected: 0' + '\n' + 'Output: ' + rob([]))
