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
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) count++;
    }
    return count;
}

addZeroes = (bin, diff) => {
    for (let i = 0; i < Math.abs(diff); i++) {
        bin.unshift('0');
    }
}

var hammingDistance = function(x, y) {
    let [xBin, yBin] = [x.toString(2).split(''), y.toString(2).split('')];
    let digitDifference = xBin.length - yBin.length;
    digitDifference > 0 ? addZeroes(yBin, digitDifference) : addZeroes(xBin, digitDifference);
    return compareArrays(xBin, yBin);
};

console.log('Expected: 2' + '\n' + 'Output: ' + hammingDistance(1,4))