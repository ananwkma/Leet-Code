/*
 * https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
 * 
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 *
 * Time: O(NlogN)
 * Space: O(N)
 *
 */

// iterative
// start at target = 0 
// section off weights such that section sums are less than or equal to target
// if num sections < D return target

// T = 0
// []
// T = 1
// [1]
// T = 2
// [1][2]
// T = 3
// [1,2][3]
// ...
// T = 11
// [1,2,3,4][5,6][7][8][9][10]
// T = 14
// [1,2,3,4][5,6][7][8][9][10]
// T = 15
// [1,2,3,4,5][6,7][8][9][10]

arrSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

tryTarget = (weights, target) => {
  let sections = [];
  for (let i = 0; i < weights.length; i++) {
    if (weights[i] > target) return -1;

    let curSection = sections[sections.length-1]
    if (curSection && weights[i] + arrSum(curSection) <= target) curSection.push(weights[i]);
    else sections.push([weights[i]]);
  }
  return sections.length;
}

var shipWithinDays = function(weights, D) {
  let hi = arrSum(weights);
  let lo = 0;
  let lowestTarget = hi;

  while (hi >= lo) {
    let mid = Math.floor((hi+lo)/2);
    let test = tryTarget(weights, mid);
    if (test !== -1 && test <= D && mid < lowestTarget) lowestTarget = mid;
    if (test === -1 || test > D) lo = mid + 1;
    else hi = mid - 1; 
  }

  return lowestTarget;
};

console.log('Expected: 15' + '\n' + 'Output: ' + shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5))
