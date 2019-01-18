/*
 * https://leetcode.com/problems/di-string-match/
 *
 * @param {string} S
 * @return {number[]}
 *
 * Time: O(N)
 * Space: O(1)
 */

var diStringMatch = function(S) {
    let [i, j] = [0, S.length]
    S = S.split('').map(entry => {
        return (entry === 'I') 
        ? (S[S.indexOf(entry)] = i++)
        : (S[S.indexOf(entry)] = j--)
    }).concat(j)
    return S
};

console.log('Expected: [0,4,1,3,2]' + '\n' + 'Output: ' + diStringMatch('IDID'))
console.log('Expected: [0,1,2,3]' + '\n' + 'Output: ' + diStringMatch('III'))
console.log('Expected: [3,2,0,1]' + '\n' + 'Output: ' + diStringMatch('DDI'))
