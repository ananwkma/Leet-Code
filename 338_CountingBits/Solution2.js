/*
 * https://leetcode.com/problems/counting-bits/
 * 
 * @param {number} num
 * @return {number[]}
 *
 * Time: O(2^S) S = size of memo 
 * Space: O(N)
 *
 */

// 0          0 i = 0 memo = []

// 1          1 i = 1 memo = [1]

// 1 0        1 i = 2 //
// 1 1        2 i = 2 memo = [1, 2]

// 1 0 0      1 i = 3 //
// 1 0 1      2 i = 3 //
// 1 1 0      2 i = 3 memo = [1, 2, 2]
// 1 1 1      3 i = 3 memo = [1, 2, 2, 3]

// 1 0 0 0    1 i = 4 //
// 1 0 0 1    2 i = 4 //
// 1 0 1 0    2 i = 4 //
// 1 0 1 1    3 i = 4 //
// 1 1 0 0    2 i = 4 memo = [1, 2, 2, 3, 2]
// 1 1 0 1    3 i = 4 memo = [1, 2, 2, 3, 2, 3]
// 1 1 1 0    3 i = 4 memo = [1, 2, 2, 3, 2, 3, 3]
// 1 1 1 1    4 i = 4 memo = [1, 2, 2, 3, 2, 3, 3, 4]

// 1 0 0 0 0  1 i = 5 //
// 1 0 0 0 1  2       //
// 1 0 0 1 0  2       //
// 1 0 0 1 1  3       //
// 1 0 1 0 0  2       //
// 1 0 1 0 1  3       //
// 1 0 1 1 0  3       //
// 1 0 1 1 1  4       //
// 1 1 0 0 0  2       memo = [1, 2, 2, 3, 2, 3, 3, 4, 2]
// 1 1 0 0 1  2
// 1 1 0 1 0  3
// 1 1 0 1 1  4
// 1 1 1 0 0  3
// 1 1 1 0 1  4
// 1 1 1 1 0  4
// 1 1 1 1 1  5

// push all of memo into result
// calculate next memo.length integers and add them to memo and to result
// overall iterator to know which number to stop at

countOnes = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '1') count++;
  }
  return count;
}

convertToBin = (num) => {
  return num.toString(2).split(''); // 2 = ['1', '0']
}

var countBits = function(num) {
  if (num === 0) return [0];
  let res = [];
  let memo = [0];
  let curNum = 0;
  while (curNum < num) {
    for (let i = 0; i < memo.length && curNum <= num; i++) {
      res.push(memo[i]);
      curNum++;
    }
    for (let i = 0; i < memo.length && curNum <= num; i++) {
      let ones = countOnes(convertToBin(curNum))
      res.push(ones);
      memo.push(ones);
      curNum++;
    }
  }

  return res;
};

console.log('Expected: [0,1,1]' + '\n' + 'Output: ' + countBits(2))
console.log('Expected: [0,1,1,2,1,2]' + '\n' + 'Output: ' + countBits(5))
