/*
 * https://leetcode.com/problems/coin-change/
 * 
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 *
 * Time: O(MN)
 * Space: O(N)
 *
 */

// [2,5,6,7,10]   11
// [0 1 2 3 4 5 6 7 8 9 10 11] value
// [0 I 1 I 2 1 1 1 I 2 2  2]  numCoins

// [1,2,5]    11
// [0 1 2 3 4 5 6 7 8 9 10 11] value
// [0 1 1 2 2 1 2 2 3 3 2  3]  numCoins

//          4
// [1,2,5] => 1
// val (4-1) = numcoins 2 
// 2 + 1 < Inf => 3
// [1,2,5] => 2
// val (4-2) = numcoins 1
// 1 + 1 < 3 => 2


var coinChange = function(coins, amount) {
  let numCoins = new Array(amount + 1).fill(Infinity);

  for (let i = 0; i < numCoins.length; i++) {
    if (i === 0) numCoins[0] = 0;

    for (let j = 0; j < coins.length; j++) {
      const curCoin = coins[j]
      if (curCoin <= i) numCoins[i] = Math.min(numCoins[i], numCoins[i - curCoin] + 1);
    }
  }

  const res = numCoins[numCoins.length-1];
  return res === Infinity ? -1 : res;
};

console.log('Expected: 3' + '\n' + 'Output: ' + coinChange( [2, 1, 5], 11 ))
console.log('Expected: 2' + '\n' + 'Output: ' + coinChange( [2, 5, 6, 7, 10], 11 ))
console.log('Expected: -1' + '\n' + 'Output: ' + coinChange( [2], 3 ))
console.log('Expected: 0' + '\n' + 'Output: ' + coinChange( [], 0 ))
console.log('Expected: -1' + '\n' + 'Output: ' + coinChange( [], 1 ))
console.log('Expected: 3' + '\n' + 'Output: ' + coinChange( [10,6,5], 21 ))
console.log('Expected: 19' + '\n' + 'Output: ' + coinChange( [122,112,383,404,25,368], 6977 ))

