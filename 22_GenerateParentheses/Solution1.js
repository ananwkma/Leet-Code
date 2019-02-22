/*
 * https://leetcode.com/problems/generate-parentheses/
 * 
 * @param {number} n
 * @return {string[]}
 *
 * Time: O(2^N)
 * Space: O(2^N)
 *
 */

var generateParenthesis = function(n) {
    let result = [];
    let progress = ''
    let balance = 0

    let dfs = (progress, balance) => {
        if (progress.length === n * 2 && balance === 0) { return result.push(progress); }
        if (progress.length === n * 2 || balance < 0 || balance > n) return 
        dfs(progress + '(', balance + 1)
        dfs(progress + ')', balance - 1)
    }
    
    dfs('', balance);
    return result;
};

console.log('Expected: ["((()))","(()())","(())()","()(())","()()()"]' + '\n' + 'Output: ' + generateParenthesis(3))
console.log('Expected: ["(())","()()"]' + '\n' + 'Output: ' + generateParenthesis(2))
console.log('Expected: ["()"]' + '\n' + 'Output: ' + generateParenthesis(1))
