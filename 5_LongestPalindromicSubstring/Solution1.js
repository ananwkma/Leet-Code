/*
 * https://leetcode.com/problems/longest-palindromic-substring/
 * 
 * @param {string} s
 * @return {string}
 *
 * Time: O(N^3)
 * Space: O(1)
 *
 */


// ''				len: 0
// b 		yes 	len: 1
// ba 		no 		len: 2
// bab 		yes		len: 3
// baba 	no
// babad	no
// a 		yes 	len: 1
// ab		no
// aba		yes		len: 3
// abad		no
// ...

// babad		5		2.5
// i = 2 		str.length-1-i 5-1-2 = 2 
// b = b


checkPalindrome = (str) => {
	for (let i = 0; i < str.length/2; i++) {
		if (str.charAt(i) !== str.charAt(str.length-1-i)) return false;
	}
	return true;
} 

var longestPalindrome = function(s) {
	let longestSubString = "";
	let longestLength = 0;
    if (s.length <= 1) return s;
	for (let i = 0; i < s.length; i++) {
		for (let j = i; j < s.length; j++) {
			let curSub = s.substring(i, j);
			if (checkPalindrome(curSub) && curSub.length > longestLength) {
				longestSubString = curSub;
				longestLength = curSub.length;
			}
		}
	}

    return longestSubString;
};

console.log('Expected: bab' + '\n' + 'Output: ' + longestPalindrome("babad"))
console.log('Expected: bb' + '\n' + 'Output: ' + longestPalindrome("cbbd"))

