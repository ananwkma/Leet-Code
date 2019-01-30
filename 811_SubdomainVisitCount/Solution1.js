/*
 * https://leetcode.com/problems/subdomain-visit-count/
 * 
 * @param {string[]} cpdomains
 * @return {string[]}
 *
 * Time: O(N)
 * Space: O(N)
 */

var subdomainVisits = function(cpdomains) {
	let resObj = {}
	let res = []
	cpdomains.map(str => {
		let visits = parseInt(str.split(' ')[0])
		let domain = str.split(' ')[1]
		resObj[domain] ? resObj[domain] += visits : resObj[domain] = visits
		while (domain.indexOf('.') > -1) {
			domain = domain.substring(domain.indexOf('.')+1)
			resObj[domain] ? resObj[domain] += visits : resObj[domain] = visits
		}
	})
	for (let key of Object.keys(resObj)) {
		res.push(resObj[key] + ' ' + key)
	}
	return res
};


// console.log('Expected: ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]' + '\n' + 'Output: ' + subdomainVisits(["9001 discuss.leetcode.com"]))
 console.log('Expected: ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]' + '\n' + 'Output: ' + subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))
































// pairCreator = (site, visits, set) => {
// 	let pairObj = new Object()
// 	pairObj[site] = visits
// 	// if (!set.has(site)) set.add(pairObj)
// 	// else {
// 	// 	set.find(pairObj.name)
// 	// }
// }

// var subdomainVisits = function(cpdomains) {
// 	let s = new Object()
// 	cpdomains.map(pair => {
// 		let site = pair.split(' ')[1]
// 		let visits = pair.split(' ')[0]
// 		pairCreator(site, visits, s)

// 		while (site.indexOf('.') > -1) {
// 			site = site.substring(site.indexOf('.')+1)
// 			pairCreator(site, visits, s)
// 		}
// 	})
// 	console.log('myset', s)
// 	return s
// };

// // console.log('Expected: ["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]' + '\n' + 'Output: ' + subdomainVisits(["9001 discuss.leetcode.com"]))
// console.log('Expected: ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]' + '\n' + 'Output: ' + subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]))
