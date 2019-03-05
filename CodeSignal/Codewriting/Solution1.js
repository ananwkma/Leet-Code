function substringPairs(s, k) {
    let res = 0; 
    let s1 = '';
    let s2 = '';
    
    const dfs = (s1, s2, k) => {
        if (s1 === s || s2 === s) return;
        if (s1.length > k && 
            s2.length > k &&
            (s1.slice(0, k) + s1.slice(k)) === (s2.slice(0, k) + s2.slice(k))) res++;
        for (let i = 0; i < s.length; i++) {
            let newS1 = 
            
        }
    }
    
    dfs(s1, s2, k);
    return res;
}
console.log('Expected: 8' + '\n' + 'Output: ' + substringPairs("abacaba", 1))
console.log('Expected: 0' + '\n' + 'Output: ' + substringPairs("a", 0))
console.log('Expected: 12' + '\n' + 'Output: ' + substringPairs("bave", 0))
console.log('Expected: 0' + '\n' + 'Output: ' + substringPairs("doqzcmbcpzrzepz", 6))
console.log('Expected: 2' + '\n' + 'Output: ' + substringPairs("gzftsqeovrlssqedninx", 2))
console.log('Expected: 4' + '\n' + 'Output: ' + substringPairs("acbbcbbaabcccbabcabb", 3))
console.log('Expected: 4' + '\n' + 'Output: ' + substringPairs("ljljljkkjljjjljjjljjjkjkjkjkkl", 9))

// "abacaba", 1
// ab, ba
// ab, ac   yes
// ab, ca
// ab, ab
// ab, ba
// ba, ac
// ba, ca
// ba, ab
// ba, ba
// ...
// aba, bac
// aba, aca yes
// ...
// abacab, bacaba
// end