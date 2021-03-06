/*
 * https://leetcode.com/problems/island-perimeter/
 * 
 * @param {number[][]} grid
 * @return {number}
 *
 * Time: O(N)
 * Space: O(1)
 */

numNeighbors = (grid, i, j) => {
	let count = 0
	if ((i+1 < grid.length) && grid[i+1][j] === 1) count++
	if ((i-1 >= 0) && grid[i-1][j] === 1) count++
	if ((j+1 < grid[0].length) && grid[i][j+1] === 1) count++
	if ((j-1 >= 0) && grid[i][j-1] === 1) count++
	return count
}

var islandPerimeter = function(grid) {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
    	for (let j = 0; j < grid[0].length; j++) {
    		if (grid[i][j] === 1) count += (4 - numNeighbors(grid, i, j))
    	}
    }
    return count
};

console.log('Expected: 4' + '\n' + 'Output: ' + islandPerimeter([[1,0]]))
console.log('Expected: 12' + '\n' + 'Output: ' + islandPerimeter([[0,1,0,],[1,1,1,],[0,1,0,]]))
console.log('Expected: 16' + '\n' + 'Output: ' + islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]))
