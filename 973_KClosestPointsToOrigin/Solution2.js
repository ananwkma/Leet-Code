/*
 * https://leetcode.com/problems/k-closest-points-to-origin/
 *
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 *
 * Time: O(NlogN)
 * Space: O(1)
 */

var kClosest = function(points, K) {
    return points.sort(function(a,b) {
        return (a[0]*a[0] + a[1]*a[1]) - (b[0]*b[0] + b[1]*b[1])
    }).splice(0,K)
};

console.log('Expected: [[-2,2]]' + '\n' + 'Output: ' + kClosest([[1,3],[-2,2]], 1))
console.log('Expected: [[-2,4],[3,3]]' + '\n' + 'Output: ' + kClosest([[3,3],[5,-1],[-2,4]], 2))
console.log('Expected: [[2,31],[-27,-38],[-55,-39],[-57,-67],[34,-84]]' + '\n' + 'Output: ' + kClosest([[68,97],[34,-84],[60,100],[2,31],[-27,-38],[-73,-74],[-55,-39],[62,91],[62,92],[-57,-67]]
, 5))
