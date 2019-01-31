/*
 * https://leetcode.com/problems/uncommon-words-from-two-sentences/
 * 
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 *
 * Time: O(A+B)
 * Space: O(A+B)
 */
var uncommonFromSentences = function(A, B) {
    let combinedArr = (A + ' ' + B).split(' ')
    let wordsObj = {}
    let res = []
    combinedArr.map(word => {
        wordsObj[word] ? wordsObj[word]++ : wordsObj[word] = 1
    })
    for (let key of Object.keys(wordsObj)) {
        if (wordsObj[key] === 1) res.push(key)
    }
    return res
};

console.log('Expected: ["sweet","sour"]' + '\n' + 'Output: ' + uncommonFromSentences("this apple is sweet", "this apple is sour"))
console.log('Expected: ["banana"]' + '\n' + 'Output: ' + uncommonFromSentences("apple apple", "banana"))
