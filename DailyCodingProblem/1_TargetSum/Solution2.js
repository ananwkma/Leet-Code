/*
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

var targetSum = function(arr, k) {
  let dict = {};
  for (let i = 0; i < arr.length; i++) {
  	let cur = arr[i];
  	if (dict[cur]) dict[cur]++;
  	else dict[cur] = 1;

  	let target = k - cur;
  	if (dict[target]) {
  		if (target === cur && dict[target] === 1) continue;;
  		return true;
  	}
  }
  return false;
};

console.log('Expected: true' + '\n' + 'Output: ' + targetSum([10, 15, 3, 7], 17))
// 10 + 7 = 17
console.log('Expected: true' + '\n' + 'Output: ' + targetSum([10, 15, 3, 10], 20))
console.log('Expected: true' + '\n' + 'Output: ' + targetSum([10, 15, 3], 20))
