/*
 * https://leetcode.com/problems/unique-paths/
 * 
 * @param {number} m
 * @param {number} n
 * @return {number}
 *
 * Time: O(MN)
 * Space: O(N)
 *
 */

// 2x3    3

// [X 1 1]
// [1 0 0] 
//    
// [X 1 1]
// [1 2 0]  
//
// [X 1 1]
// [1 2 3]  

// 7x3    28

// [X 1 1 1  1  1  1]
// [1 2 3 4  5  6  7]
// [1 3 6 10 15 21 28]

// [1 1 1 1  1  1  1] r1
// []                 r2

// [1 2 3 4  5  6  7] r1
// [1 1 1 1  1  1  1] r2

// [1 3 6 10 15 21 28] r1
// [1 2 3 4  5  6  7 ] r2

// [1 3 6 10 15 21 28] r1
// [1 3 6 10 15 21 28] r2

var uniquePaths = function(m, n) {
  let row1 = [];
  let row2 = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) row1.push(1);
      else if (j === 0) row1[0] = 1;
      else row1[j] = row1[j-1] + row2[j];
    }
    row2 = row1;
  }
  return row2[row2.length-1];
};

console.log('Expected: 3' + '\n' + 'Output: ' + uniquePaths(3,2))
console.log('Expected: 28' + '\n' + 'Output: ' + uniquePaths(7,3))
