/*
 * https://leetcode.com/problems/projection-area-of-3d-shapes/
 * 
 * @param {number[][]} grid
 * @return {number}
 *
* Time: O(AB) (sets * set length)
 * Space: O(B) (set length)
 */
var projectionArea = function(grid) {
    let rowGreatest = []
    let [sumGreatest, numElements] = [0,0]
    grid.map(set => {
        for (let i = 0; i < set.length; i++) {
            if (set[i] !== 0) numElements++
            rowGreatest[i] ? (rowGreatest[i] = Math.max(rowGreatest[i], set[i])) : rowGreatest[i] = set[i]
        }
        sumGreatest += Math.max(...set)
    })
    return sumGreatest + rowGreatest.reduce((total, val) => total += val) + numElements
};

console.log('Expected: 8' + '\n' + 'Output: ' + projectionArea([[1,0],[0,2]]))
