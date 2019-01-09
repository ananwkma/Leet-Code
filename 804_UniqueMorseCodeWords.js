/**
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

checkAgainstArray = (morseArray, translated) => {
    if(!morseArray) morseArray.push(translated)
    else {
        alreadyInArray = false
        morseArray.map(check => {
            if (translated === check) alreadyInArray = true
        })
        if (!alreadyInArray) morseArray.push(translated)
    }
}

var uniqueMorseRepresentations = function(words) {
    let morseArray = []
    words.map(word => {
        const translated = translate(word)
        checkAgainstArray(morseArray, translated)
    })
    return morseArray.length
};

const test = ["gin", "zen", "gig", "msg"]
console.log('Expected: 2' + '\n' + 'Output: ' + uniqueMorseRepresentations(test))