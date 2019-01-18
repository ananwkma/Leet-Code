/*
 * https://leetcode.com/problems/di-string-match/
 *
 * @param {string} S
 * @return {number[]}
 *
 * Time: O(N)
 * Space: O(N)
 */

var diStringMatch = function(S) {
	let newArr = []
	let [i, j] = [0, S.length]

	S.split('').map(entry => {
    	if (entry === 'I') {
    		newArr.push(i)
    		i++
    	}
    	else {
    		newArr.push(j)
    		j--
    	}
	})

	newArr.push(j)

	return newArr
};

console.log('Expected: [0,4,1,3,2]' + '\n' + 'Output: ' + diStringMatch('IDID'))
console.log('Expected: [0,1,2,3]' + '\n' + 'Output: ' + diStringMatch('III'))
console.log('Expected: [3,2,0,1]' + '\n' + 'Output: ' + diStringMatch('DDI'))
