/*
 *
 * Time: O(N)
 * Space: O(1)
 *
 */

// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. 
// Given N, write a function that returns the number of unique ways you can climb the staircase. 
// The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2

// What if, instead of being able to climb 1 or 2 steps at a time, 
// you could climb any number from a set of positive integers X? 
// For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

// N = 1, 1
// N = 2, 2
// N = 3, 3
// N = 4, 5
// N = 5, 8


var climbStairs = function(N) {
  let [prev, prevprev, sum] = [2, 1, 0]
  let res = 0;
  for (let i = 0; i < N; i++) {
    if (i === 1) res += 1;
    else if (i === 2) res += 2;
    else {
      sum = prev + prevprev;
      res += sum;
      prevprev = prev;
      prev = sum;
    }
  }
  return res;
};

console.log('Expected: 5' + '\n' + 'Output: ' + climbStairs(4))
console.log('Expected: 8' + '\n' + 'Output: ' + climbStairs(5))
