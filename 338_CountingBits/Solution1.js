/*
 * https://leetcode.com/problems/counting-bits/
 * 
 * @param {number} num
 * @return {number[]}
 *
 * Time: O(N^2)
 * Space: O(N)
 *
 */

// 2 
// 0 1		1
// 1 0		1
			
// 5
// 0 0 1	1
// 0 1 0	1
// 0 1 1	2
// 1 0 0	1
// 1 1 0	2

// brute force
// res = [0]
// convert to bin, iterate through and count 1's
// push count into res

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
    let res = [];
    for (let i = 0; i <= num; i++) {
    	res.push(countOnes(convertToBin(i)));
    }
    return res;
};

console.log('Expected: [0,1,1]' + '\n' + 'Output: ' + countBits(2))
console.log('Expected: [0,1,1,2,1,2]' + '\n' + 'Output: ' + countBits(5))
