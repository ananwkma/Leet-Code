/*
 * https://leetcode.com/problems/unique-morse-code-words/?fbclid=IwAR1tb7JHMNKZ5XRezFFAQly4aDUj8nOBtGpn2q-RIMGJqM308Gktk5psIMI
 * @param {string[]} words
 * @return {number}
 */
const morse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
}

translate = (word) => {
    let translated = ''
    for(var i = 0; i < word.length; i++) {
        translated += morse[word.charAt(i)]
    }
    return translated
}

var uniqueMorseRepresentations = function(words) {
    let morseSet = new Set()
    words.map(word => {
        const translated = translate(word)
        morseSet.add(translated)
    })
    return morseSet.size
};

const test = ["gin", "zen", "gig", "msg"]
console.log('Expected: 2' + '\n' + 'Output: ' + uniqueMorseRepresentations(test))