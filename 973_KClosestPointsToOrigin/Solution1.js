/*
 * https://leetcode.com/problems/k-closest-points-to-origin/
 *
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 *
 * Time: O(AB)
 * Space: O(N)
 */

getDist = (arr) => {
    return (arr[0]*arr[0] + arr[1]*arr[1])
}

var kClosest = function(points, K) {
    let newArr = points
    const initSize = points.length
    points = points.map(arr => (
        getDist(arr)
    ))
    for (let i = 0; i < initSize - K; i++) {
        newArr.splice(points.indexOf(Math.max(...points)), 1)
        points.splice(points.indexOf(Math.max(...points)), 1)
    }
    return newArr
};

console.log('Expected: [[-2,2]]' + '\n' + 'Output: ' + kClosest([[1,3],[-2,2]], 1))
console.log('Expected: [[-2,4],[3,3]]' + '\n' + 'Output: ' + kClosest([[3,3],[5,-1],[-2,4]], 2))
console.log('Expected: [[2,31],[-27,-38],[-55,-39],[-57,-67],[34,-84]]' + '\n' + 'Output: ' + kClosest([[68,97],[34,-84],[60,100],[2,31],[-27,-38],[-73,-74],[-55,-39],[62,91],[62,92],[-57,-67]]
, 5))
