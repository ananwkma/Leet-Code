/*
 *
 * Time: O(N^2)
 * Space: O(1)
 *
 */

concat = (intA, intB) => {
  return parseInt(intA.toString() + intB.toString())
}

const concatSum = function(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      sum += concat(arr[i], arr[j]);
    }
  }
  return sum;
};

console.log('Expected: 1344' + '\n' + 'Output: ' + concatSum([10, 2]))
// 1010 + 102 + 210 + 22
