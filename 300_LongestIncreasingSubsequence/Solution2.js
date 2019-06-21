/*
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * 
 * @param {number[]} nums
 * @return {number}
 *
 * Time: O(N^2)
 * Space: O(N)
 *
 */

// [ 10,  9,  2,  8,  3,  7, 101,  18] arr
// [  1   1   1   2   2   3    4    4]
//   10
//        9 < 10
//            2 < 10 2 < 9
//                8 < 10 8 < 9 8 > 2 (1 + 1)
//                    3 < 10 3 < 9 3 > 2 (1 + 1) 3 < 8
//                        7 > 3 (2 + 1)
//                            101 > 7 (3 + 1)
//                                  18 > 7 (3 + 1)


const lengthOfLIS = function(arr) {
  let max = 0;
  let greatestSub = [];

  for (let i = 0; i < arr.length; i++) {
    greatestSub.push(1);
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        greatestSub[i] = Math.max(greatestSub[i], greatestSub[j]+1);
      }
    }
    max = Math.max(greatestSub[i], max);
  }

  return max;
}

console.log('Expected: 4' + '\n' + 'Output: ' + lengthOfLIS([10,9,2,8,3,7,101,18]))
console.log('Expected: 6' + '\n' + 'Output: ' + lengthOfLIS([1,3,6,7,9,4,10,5,6]))
console.log('Expected: 1' + '\n' + 'Output: ' + lengthOfLIS([0]))
