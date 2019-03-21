/*
 * https://leetcode.com/problems/hamming-distance/
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 *
 * Time: O(N)
 * Space: O(1)
 */

compareArrays = (arr1, arr2) => {
    let count = 0;
    let big = arr1.length >= arr2.length ? arr1 : arr2;
    let small = arr1.length >= arr2.length ? arr2 : arr1;
    for (let i = 0; i < big.length; i++) {
        let bigLastDigit = big[big.length-1-i];
        let smallLastDigit = small[small.length-1-i]
        if (bigLastDigit !== smallLastDigit) {
            if (bigLastDigit === '0'  && smallLastDigit === undefined) continue;
            count++;
        }
    }
    return count;
}

var hammingDistance = function(x, y) {
    let [xBin, yBin] = [x.toString(2).split(''), y.toString(2).split('')];
    return compareArrays(xBin, yBin);
};

console.log('Expected: 2' + '\n' + 'Output: ' + hammingDistance(93,73))
console.log('Expected: 2' + '\n' + 'Output: ' + hammingDistance(1,4))