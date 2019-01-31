/*
 * https://leetcode.com/problems/distribute-candies/
 * 
 * @param {number[]} candies
 * @return {number}
 *
 * Completion: 6:30
 *
 * Time: O(NlogN)
 * Space: O(1)
 */

var distributeCandies = function(candies) {
    let [count, max] = [0, candies.length/2]
    candies = candies.sort()
    for (let i = 0; i < candies.length; i++) {
    	if (!(candies[i] === candies[i+1])) count++    	
    }
    return Math.min(count, max)
};

console.log('Expected: 2' + '\n' + 'Output: ' + distributeCandies([100000,0,100000,0,100000,0,100000,0,100000,0,100000,0]))
console.log('Expected: 50' + '\n' + 'Output: ' + distributeCandies([976,95,76,458,154,993,943,471,575,813,330,830,750,774,368,389,963,188,679,487,346,697,505,185,730,961,417,789,36,843,754,913,931,726,651,343,93,282,423,850,639,885,562,258,456,902,925,28,908,41,282,705,672,855,523,376,61,562,301,459,645,458,762,259,435,559,716,417,319,387,949,490,639,675,827,430,209,474,593,142,812,834,73,935,439,336,102,151,633,738,741,59,479,616,347,490,693,61,817,682]))
console.log('Expected: 3' + '\n' + 'Output: ' + distributeCandies([1,1,1,1,2,2,2,3,3,3]))
console.log('Expected: 2' + '\n' + 'Output: ' + distributeCandies([1000,1,1,1]))
console.log('Expected: 3' + '\n' + 'Output: ' + distributeCandies([1,1,2,2,3,3]))
console.log('Expected: 2' + '\n' + 'Output: ' + distributeCandies([1,1,2,3]))
