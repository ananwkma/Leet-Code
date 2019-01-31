/*
 * https://leetcode.com/problems/island-perimeter/
 * 
 * @param {number[][]} grid
 * @return {number}
 *
 * Time: O(N)
 * Space: O(1)
 */

var islandPerimeter = function(grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
    	for (let j = 0; j < grid[0].length; j++) {
    		if (grid[i][j] === 1) count += (4 - grid[i+1][j] + grid[i-1][j] + grid[i][j+1] + grid[i][j-1])
    	}
    }
    return count
};

console.log('Expected: 4' + '\n' + 'Output: ' + islandPerimeter([[1,0]]))
console.log('Expected: 12' + '\n' + 'Output: ' + islandPerimeter([[0,1,0,],[1,1,1,],[0,1,0,]]))
console.log('Expected: 16' + '\n' + 'Output: ' + islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]))
