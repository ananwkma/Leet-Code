/*
 * https://leetcode.com/problems/shortest-completing-word/
 * 
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 *
 * Time: O(AB) (A = letters in plate, B = total characters in all words)
 * Space: O(N) (A + longest string from words)
 *
 */

convertToObjectOfLetters = (word, obj) => {
    word = word.split(/[ 1234567890]/).join('').toLowerCase()
    for (let letter of word) {
        obj[letter] ? obj[letter]++ : (obj[letter] = 1)
    }
}

checkWord = (plateObj, wordObj) => {
    for (let key of Object.keys(plateObj)) {
        if (!wordObj[key] || plateObj[key] > wordObj[key]) return false
    }
    return true
}

var shortestCompletingWord = function(licensePlate, words) {
    let min = undefined
    let plateObj = {}
    licensePlate = convertToObjectOfLetters(licensePlate, plateObj)

    words.map(word => {
        let wordObj = {}
        convertToObjectOfLetters(word, wordObj)

        if (checkWord(plateObj, wordObj)) {
            if (min === undefined || (word.length < min.length)) min = word
        }
    })

    return min
};

console.log('Expected: steps' + '\n' + 'Output: ' + shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]))
console.log('Expected: pest' + '\n' + 'Output: ' + shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"]))
