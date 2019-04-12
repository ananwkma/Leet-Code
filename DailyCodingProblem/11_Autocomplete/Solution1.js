/*
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

// Implement an autocomplete system. 
// That is, given a query string s and a set of all possible query strings, 
// return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

var autoComplete = function(s, arr) {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (s === arr[i].substring(0,s.length)) res.push(arr[i]);
	}
	return res;
};

console.log('Expected: [deer, deal]' + '\n' + 'Output: ' + autoComplete('de', ['dog', 'deer', 'deal']))
