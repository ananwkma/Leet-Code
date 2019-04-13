/*
 *
 * Time: O(|V| + |E|)
 * Space: O(H)
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
// 1

// N = 2, 2
// 1 1
// 2

// N = 3, 3
// 1 1 1
// 1 2
// 2 1

// N = 4, 5

// N = 5, 8
// 1 1 1 1 1
// 1 1 1 2
// 1 1 2 1
// 1 2 1 1
// 2 1 1 1
// 1 2 2
// 2 1 2
// 2 2 1 

// N = 3
// 1
//  1 1
//   1 1 1    pass
//  1 2     pass
// 2
//  2 1     pass

var climbStairs = function(N) {
  dfs = (total) => {
    if (total === N) return 1;
    if (total > N) return 0;
    return dfs(total + 1) + dfs(total + 2);
  }
  return dfs(0);
};

console.log('Expected: 5' + '\n' + 'Output: ' + climbStairs(4))
console.log('Expected: 8' + '\n' + 'Output: ' + climbStairs(5))
