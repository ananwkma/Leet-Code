/*
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

concat = (intA, intB) => {
  return parseInt(intA.toString() + intB.toString())
}

const concatSum = function(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
  	sum += arr[i] * arr.length;
  }

  let dict = {};
  for (let i = 0; i < arr.length; i++) {
  	let cur = arr[i];
  	let digits = 0;
  	while (cur > 0) {
  		cur = Math.floor(cur/10);
  		digits++;
  	}
  	if (!dict[digits]) dict[digits] = 1;
  	else dict[digits]++;
  }

  for (let i = 0; i < arr.length; i++) {
  	let cur = arr[i];
  	for (let key of Object.keys(dict)) {
  		sum += cur * Math.pow(10, key) * dict[key];
  	}
  }

  return sum;
};

// mult every value by arr.length and add to sum
// take # digits every num has and map to a dict of #digits : occurences
// cur * 10^digits * occurences for every key in dict and every num in arr

console.log('Expected: 1344' + '\n' + 'Output: ' + concatSum([10, 2]))
// 1010 + 102 + 210 + 22
console.log('Expected: 534240' + '\n' + 'Output: ' + concatSum([1, 23, 456]))
// 11 + 123 + 1456 + 231 + 2323 + 23456 + 4561 + 45623 + 456456
