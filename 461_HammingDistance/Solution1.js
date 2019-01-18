/*
 * https://leetcode.com/problems/hamming-distance/
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 *
 * Time: O(N)
 * Space: O(1)
 */

var hammingDistance = function(x, y) {
	let [xBin, yBin] = [x.toString(2), y.toString(2)]
	while (xBin.length !== yBin.length) {
		xBin.length < yBin.length ? 
			xBin = (0 + xBin) :
			yBin = (0 + yBin)
	}
	for (let i = count = 0; i < xBin.length; i++) {
		if (yBin[i] - xBin[i] !== 0) count++
	}
	return count
};

console.log('Expected: 2' + '\n' + 'Output: ' + hammingDistance(1,4))
