/*
 * https://leetcode.com/problems/can-place-flowers/
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(N/2)
 */
var canPlaceFlowers = function(flowerbed, n) {
	lastFlower = 0
    for (let i = 0; i < flowerbed.length; i++) {
    	if (flowerbed[i+1] !== undefined) {
    		if (lastFlower === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0) {
    			flowerbed[i] = 1
    			n -= 1
    		}
    		lastFlower = flowerbed[i]
    	}
    	else if (lastFlower === 0 && flowerbed[i] === 0) {
    		flowerbed[i] = 1
    		n -= 1
    	}
    }
    if (n <= 0) return true
    return false
};

const testA = [1,0,0,0,1,0,0]
const testB = 2
console.log('Expected: true' + '\n' + 'Output: ' + canPlaceFlowers(testA, testB))