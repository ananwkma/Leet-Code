/*
 * https://leetcode.com/problems/subdomain-visit-count/
 * 
 * @param {string[]} cpdomains
 * @return {string[]}
 *
 * Time: O(N)
 * Space: O(N)
 */
pairCreator = (pair, visits, set) => {
	let pairObj = new Object()
	if (visits === undefined) {
		let key = pair.split(' ')[1] 
		pairObj[key] = pair.split(' ')[0]
		if (!set.has(key)) set.add(pairObj)
	}
	else {
		let key = pair
		pairObj[key] = visits
		if (!set.has(key)) set.add(pairObj)
	}
	// else {
	// 	set.find(pairObj.name)
	// }
}

var subdomainVisits = function(cpdomains) {
	let s = new Set()
	cpdomains.map(pair => {
		let site = pair.split(' ')[1]
		let visits = pair.split(' ')[0]
		pairCreator(pair, undefined, s)

		while (site.indexOf('.') > -1) {
			site = site.substring(site.indexOf('.')+1)
			pairCreator(site, visits, s)
		}
	})
	console.log('myset', s)
	return s
};

// console.log('Expected: ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]' + '\n' + 'Output: ' + subdomainVisits(["9001 discuss.leetcode.com"]))
console.log('Expected: ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]' + '\n' + 'Output: ' + subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))












// /*
//  * https://leetcode.com/problems/subdomain-visit-count/
//  * 
//  * @param {string[]} cpdomains
//  * @return {string[]}
//  *
//  * Time: O()
//  * Space: O()
//  */

// pairCreator = (pair, visits, set) => {
// 	let pairObj = new Object()
//     if (visits === undefined) {
//     	pairObj.name = pair.split(' ')[1] 
// 		pairObj.visits = pair.split(' ')[0]
// 	}
//     else {
//     	pairObj.name = pair
//     	pairObj.visits = visits
//     }
//     set.add(pairObj)

//     while (pairObj.name.indexOf('.') > -1) {
//     	pairObj.name = pairObj.name.slice(pairObj.name.indexOf('.')+1)
//     	pairCreator(pairObj.name, pairObj.visits, set)
//     }
// }

// var subdomainVisits = function(cpdomains) {
//     let s = new Set()
//     cpdomains.map(pair => {
//     	pairCreator(pair, undefined, s)
//     })
//     console.log('myset', s)
//     return s
// };

// console.log('Expected: ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]' + '\n' + 'Output: ' + subdomainVisits(["9001 discuss.leetcode.com"]))
// // console.log('Expected: ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]' + '\n' + 'Output: ' + subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))
