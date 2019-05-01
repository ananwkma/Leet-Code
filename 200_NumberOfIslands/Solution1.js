/*
 * https://leetcode.com/problems/number-of-islands/
 * 
 * @param {character[][]} grid
 * @return {number}
 *
 * Time: O(MN)
 * Space: O(MN)
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

const markNeighbors = (grid, i, j, visited) => {
  dfs = (x, y) => {
    if (x+1 < grid.length && grid[x+1][y] === '1' && !visited.has(`${x+1},${y}`)) {
      visited.add(`${x+1},${y}`);
      dfs (x+1, y);
    }
    if (x-1 > 0 && grid[x-1][y] === '1' && !visited.has(`${x-1},${y}`)) {
      visited.add(`${x-1},${y}`);
      dfs (x-1, y);
    }
    if (y+1 < grid[0].length && grid[x][y+1] === '1' && !visited.has(`${x},${y+1}`)) {
      visited.add(`${x},${y+1}`);
      dfs (x, y+1);
    }
    if (y-1 > 0 && grid[x][y-1] === '1' && !visited.has(`${x},${y+1}`)) {
      visited.add(`${x},${y+1}`);
      dfs (x, y-1);
    }
  }
  dfs (i, j);
}

const numIslands = (grid) => {
  let res = 0;
  let visited = new Set;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited.has(`${i},${j}`) && grid[i][j] === '1') {
        res++;
        markNeighbors(grid, i, j, visited);
      }
    }
  }
  return res;
};

console.log('Expected: 1' + '\n' + 'Output: ' + numIslands(['11110', '11010', '11000', '00000']))
console.log('Expected: 3' + '\n' + 'Output: ' + numIslands(['11000', '11000', '00100', '00011']))
