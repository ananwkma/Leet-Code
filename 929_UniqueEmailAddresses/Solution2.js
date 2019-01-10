/*
 * https://leetcode.com/problems/unique-email-addresses/
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
	let convertedEmails = new Set()
	emails.map(email => {
		let [localName, domainName] = email.split('@')
		let localNameBeforePlus = localName.split('+')[0]
		let convertedLocalName = localNameBeforePlus.split('').filter(char => char !== '.').join('')
		convertedEmails.add(convertedLocalName + '@' + domainName)
	})
	return convertedEmails.size
};

let test = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
console.log('Expected : 2' + '\n' + 'Output: ' + numUniqueEmails(test))