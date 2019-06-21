/*
 * https://leetcode.com/problems/climbing-stairs/
 * 
 * @param {number} n
 * @return {number}
 *
 * Time: O()
 * Space: O()
 *
 */


// 2
//
// 1 + 1
// 2
//
// 2

// 3 (combos of 2 + 1) + (combos of 1 + 2)
//
// (1 + 1) + 1
// (2) + 1
// (1) + 2
//
// 3


// 4 (combos of 3 + 1) + (combos of 2 + 2)
// 
// (1 + 1 + 1) + 1
// (2 + 1) + 1
// (1 + 2) + 1
//
// (1 + 1) + 2
// (2) + 2
//
// 5

// 1 2 3 4 5 6
// 1 2 3 5 8 13
// fibonacci
// 1 -> 1
// 2 -> 2
// 3 -> 1 + 2 = 3
// 4 -> 2 + 3 = 5
// 5 -> 3 + 5 = 8
// 6 -> 5 + 8 = 13

var climbStairs = function(n) {
  let [lastlast, last, cur] = [1, 2, 3];

  for (let i = 3; i < n; i++) {
    lastlast = last;
    last = cur;
    cur = last + lastlast; 
  }

  if (n < 3) return n;
  else return cur;
};

console.log('Expected: 2' + '\n' + 'Output: ' + climbStairs(2))
console.log('Expected: 3' + '\n' + 'Output: ' + climbStairs(3))
console.log('Expected: 13' + '\n' + 'Output: ' + climbStairs(6))
