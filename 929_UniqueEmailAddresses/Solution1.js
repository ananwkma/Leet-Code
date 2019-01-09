/*
 * https://leetcode.com/problems/unique-email-addresses/?fbclid=IwAR3DMz_f6Qhj4bxJwPFst1rqCs_24L9IGYxXDZTGZHFOvjl0K1s1stjjC84
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
	let convertedEmails = new Set()
	emails.map(email => {
		const emailChars = email.split('')
		let convertedEmail = ''
		let afterPlus = false
		for(var i = 0; i <= emailChars.length; i++) {
			if(emailChars[i] === '@') {
				convertedEmail += emailChars.slice(i).join('')
				break
			}
			else if(emailChars[i] === '+') {
				afterPlus = true
			}
			else if(emailChars[i] !== '.' && afterPlus === false) {
				convertedEmail += emailChars[i]
			}
		}
		convertedEmails.add(convertedEmail)
	})
	return convertedEmails.size
};

let test = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
console.log('Expected : 2' + '\n' + 'Output: ' + numUniqueEmails(test))