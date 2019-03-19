/*
 * https://leetcode.com/problems/3sum/
 * 
 * @param {number[]} nums
 * @return {number[][]}
 *
 * Time: O()
 * Space: O()
 *
 */

// triple pointer
// a, b, c
// sum of abc = 0? add to array and then add that array to result array

objectify = (arr) => {
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    let curNum = arr[i]
    if (!obj[curNum]) obj[curNum] = 1;
    else obj[curNum]++; 
  }
  return obj;
}

isDuplicate = (abc, res) => {
  if (res.length === 0) return true;
  let abcObj = objectify(abc);
  for (let i = 0; i < res.length; i++) {
    let testObj = objectify(res[i]);
    if (Object.entries(abcObj).toString() === Object.entries(testObj).toString()) return false;
  }
  return true;
}

var threeSum = function(nums) {
  let res = [];
    for (let a = 0; a < nums.length; a++) {
      for (let b = a+1; b < nums.length; b++) {
        for (let c = b+1; c < nums.length; c++) {
          if (nums[a]+nums[b]+nums[c] === 0 && isDuplicate([nums[a], nums[b], nums[c]], res)) {
            let arr = [nums[a], nums[b], nums[c]];
            res.push(arr);
          }
        }
      }
    }

    return res;
};

// console.log('Expected: [[-1,-1,2],[-1,0,1]]' + '\n' + 'Output: ' + threeSum([-1,0,1,2,-1,-4]))
console.log('Expected: [[-5,1,4],[-5,2,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-2,4],[-2,-1,3],[-2,0,2],[-2,1,1],[-1,-1,2],[-1,0,1]]' + '\n' + 'Output: ' + threeSum([-1,-2,-3,4,1,3,0,3,-2,1,-2,2,-1,1,-5,4,-3]))
