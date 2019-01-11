/*
 * https://leetcode.com/problems/can-place-flowers/
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 *
 * Time: O(N)
 * Space: O(1)
 */
var canPlaceFlowers = function(flowerbed, n) {
	let i = count = 0
    for (let i = count = 0; i < flowerbed.length; i++) {
    	if (flowerbed[i] === 0 && 
           (i === 0 || flowerbed[i - 1] === 0) && 
           (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1
            count++
        }
    }
    return count >= n
};

const testA = [1,0,0,0,1,0,0]
const testB = 2
console.log('Expected: true' + '\n' + 'Output: ' + canPlaceFlowers(testA, testB))