/*
 *
 * Time: O(N^2)
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

// [1,2]
// N = 1, 1
// N = 2, 2
// N = 3, 3
// N = 4, 5
// N = 5, 8

// [1,3,5]
// N = 1, 1
// N = 2, 1
// N = 3, 2
// N = 4, 3
// N = 5, 5

// [1,10]
// N = 1, 1
// ... N = 9, 1
// N = 10, 2
// N = 11, 3
// N = 12, 4
// N = 13, 5

// N = 4, 3
// 1
//  1 1
//   1 1 1
//    1 1 1 1   pass
//  1 3         pass
//  1 5
// 3
//  3 1         pass
//  3 3
//  3 5
// 5

// N = 5, 5
// 1
//  1 1
//   1 1 1
//   1 1 3          pass
//    1 1 1 1
//    1 1 1 3   
//     1 1 1 1 1    pass
//  1 3  
//   1 3 1          pass       
//  1 5
// 3
//  3 1  
//   3 1 1          pass
//  3 3
//  3 5
// 5                pass

var climbStairs = function(N, steps) {
  let res = 0;
  dfs = (total) => {
    if (total === N) return res++;
    if (total > N) return;
    for (step of steps) {
      dfs (total + step);
    }
  }
  dfs (0);
  return res;
};

console.log('Expected: 5' + '\n' + 'Output: ' + climbStairs(4, [1,2]))
console.log('Expected: 8' + '\n' + 'Output: ' + climbStairs(5, [1,2]))
console.log('Expected: 3' + '\n' + 'Output: ' + climbStairs(4, [1,3,5]))
console.log('Expected: 5' + '\n' + 'Output: ' + climbStairs(5, [1,3,5]))
