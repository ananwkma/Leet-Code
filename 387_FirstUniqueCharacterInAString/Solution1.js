/*
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 * 
 * @param {string} s
 * @return {number}
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

// obj of unique, obj of repeated
// iterate through string, slot obj {char: idx} into corresponding objs
// find lowest value in obj and return


findLowest = (obj) => {
	let res = Infinity;
	for (let key of Object.keys(obj)) {
		if (obj[key] < res) res = obj[key];
	}
	return res === Infinity ? -1 : res;
}

var firstUniqChar = function(s) {
    let unique = {};
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
    	let curChar = s.charAt(i);
    	if (!set.has(curChar)) {
    		unique[curChar] = i;
    		set.add(curChar);
    	}
    	else {
    		delete unique[curChar];
    	}
    }
    return findLowest(unique);
};

console.log('Expected: 0' + '\n' + 'Output: ' + firstUniqChar("leetcode"))
console.log('Expected: 2' + '\n' + 'Output: ' + firstUniqChar("loveleetcode"))

