/*
 * https://leetcode.com/problems/heaters/
 *
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 *
 * Time: O(max(M,N))
 * Space: O(N)
 */

var findRadius = function(houses, heaters) {
	if (heaters.length === 0) return -1
	if (houses.length === 0) return 0

	houses.sort((a, b) => a - b)
	heaters.sort((a, b) => a - b)
	let maxRadius = 0
	let i = 0

	houses.map(house => {
		while (house > (heaters[i] + heaters[i + 1])/2) {
			i++
		}
		maxRadius = Math.max(maxRadius, Math.abs(heaters[i] - house))
	})
	return maxRadius
};

console.log('Expected: 3' + '\n' + 'Output: ' + findRadius([1,2,3,4,5,6,7,8,9,10], [2,9]))