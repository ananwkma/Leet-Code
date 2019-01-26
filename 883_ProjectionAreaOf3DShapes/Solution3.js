/*
 * https://leetcode.com/problems/projection-area-of-3d-shapes/
 * 
 * @param {number[][]} grid
 * @return {number}
 *
 * Time: O(N) (sets * set length)
 * Space: O(1) (set length)
 */
var projectionArea = function(grid) {
    let [nonZero, ans] = [0,0]
    for (let i = 0; i < grid.length; i++) {
        let [rowMax, colMax] = [0,0]
        for (let j = 0; j < grid[i].length; j++) {
            rowMax = Math.max(rowMax, grid[i][j])
            colMax = Math.max(colMax, grid[j][i])
            if (grid[i][j] !== 0) nonZero++
        }
        ans += rowMax + colMax
    }
    return (nonZero + ans)
};

console.log('Expected: 8' + '\n' + 'Output: ' + projectionArea([[1,0],[0,2]]))
