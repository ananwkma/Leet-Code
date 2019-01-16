/*
 * https://leetcode.com/problems/first-bad-version/
 *
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 *
 * Time: O(logN)
 * Space: O(1)
 */

isBadVersion = (test) => {
	let answer = 4
	if (test >= answer) return true
	else return false
}

var solution = (n) => {
    let ans = n
    let test = Math.floor(n/2)
    for (let min = 0, max = n; ;) {
    	if (isBadVersion(test) === true) {
            ans = Math.min(ans, test)
            max = test
            if (test === (test - Math.floor((test - min) / 2))) break
            test = test - Math.floor((test - min) / 2)
        }
        else {
            min = test
            if (test === (Math.floor((max - test) / 2) + test)) break
            test = Math.floor((max - test) / 2) + test
        }
    }
    return ans
};

console.log('Expected: 4' + '\n' + 'Output: ' + solution(5))