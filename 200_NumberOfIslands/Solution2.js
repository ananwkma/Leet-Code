/*
 * https://leetcode.com/problems/number-of-islands/
 * 
 * @param {character[][]} grid
 * @return {number}
 *
 * Time: O()
 * Space: O()
 *
 */

// 11110
// 11010
// 11000
// 00000

// 11000
// 11000
// 00100
// 00011

// 1 1 1 1
// 1 1   1
// 1 1

// 1 1
// 1 1
//     1
//       1 1

// [0, 0] check up    [0, -1]
//        check down  [0, +1]
//        check left  [-1, 0]
//        check right [+1, 0]

// bounds x: 0, grid[0].length
// bounds y: 0, grid.length

// check if 1 is in set, if true continue 
//  if false, increment island count 
//    dfs neighbors until 0
//    save all 1's coordinates into set


const numIslands = (grid) => {
  const W = grid[0].length;
  const H = grid.length;
  let count = 0;

  for (let i = 0; i < W; i++) {
    for (let j = 0; j < H; j++) {
      if (grid[i][j] !== '0') {
        count++;
        dfs (i, j);
      }
    }
  }

  return count;

  function dfs(i, j) {
    console.log(i, j)
    if (i === W || j === H || i < 0 || j < 0) return;
    if (grid[i][j] === '0') return;

    grid[i][j] = '0';
    dfs (i+1, j);
    dfs (i-1, j);
    dfs (i, j+1);
    dfs (i, j-1);
  }

};

console.log('Expected: 1' + '\n' + 'Output: ' + numIslands(['11110', '11010', '11000', '00000']))
console.log('Expected: 3' + '\n' + 'Output: ' + numIslands(['11000', '11000', '00100', '00011']))
