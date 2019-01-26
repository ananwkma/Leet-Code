/*
 * https://leetcode.com/problems/fibonacci-number/
 * 
 * @param {number} N
 * @return {number}
 *
 * Time: O(N)
 * Space: O(1)
 */
var fib = function(N) {
    if (N < 1) return 0
    let j = 1
    for (let i = 0, idx = 1; idx < N; idx++) {
        let tmp = i
        i = j
        j += tmp
    }
    return j
};

console.log('Expected: 3' + '\n' + 'Output: ' + fib(4))
