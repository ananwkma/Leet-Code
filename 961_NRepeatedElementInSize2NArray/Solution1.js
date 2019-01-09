/*
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/?fbclid=IwAR393WnPoGLjC_m6F9YKCvweQwaf6siUKDPfTL-XJ2XkmmUG9dcJQjt53fo
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let uniqueNums = new Set()
    for (var i = 0; i < A.length; i++) {
    	if (uniqueNums.has(A[i])) return A[i]
        else uniqueNums.add(A[i])
    }
};

let test = [1,2,3,3]
console.log('Expected : 3' + '\n' + 'Output: ' + repeatedNTimes(test))