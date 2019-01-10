/*
 * https://leetcode.com/problems/heaters/
 *
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 *
 * Time: O()
 * Space: O()
 */

var findRadius = function(houses, heaters) {
	if (heaters.length === 0) return -1
	if (houses.length === 0) return 0
	let S = new Set(houses)
	for (let radius = 0;; radius ++) {
		heaters.map(idx => {
			if(S.has(idx + radius)) S.delete(idx + radius)
			if(S.has(idx - radius)) S.delete(idx - radius)
		})
		if (S.size === 0) return radius
	}
};

console.log('Expected: 1' + '\n' + 'Output: ' + findRadius([1,2,3], [2]))
