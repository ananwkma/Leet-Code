/*
 * https://leetcode.com/problems/4sum-ii/
 * 
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 *
 * Time: O()
 * Space: O(N)
 *
 */

// Time: O(N)
// Space: O(1)
const compareArrays = (obj1, obj2) => {
    let count = 0;
    for (let key of Object.keys(obj1)) {
        let complement = 0;
        if (key !== 0) complement = key*-1;
        if (obj2[complement]) {
            count += (obj1[key] * obj2[complement]);
        }
    }
    return count;
}

// Time: O(N^2)
// Space: O(N)
const addArrays = (arr1, arr2, obj) => {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            let sum = arr1[i] + arr2[j];
            obj[sum] ? obj[sum]++ : obj[sum] = 1;
        }
    }
}

var fourSumCount = function(A, B, C, D) {
    let AB = {};
    let CD = {};
    addArrays(A, B, AB);
    addArrays(C, D, CD);
    // console.log(AB, CD);
    return compareArrays(AB, CD);
};

// AB = [-1, 0, 0, 1] => {-1: 1, 0: 2, 1: 1} 
// CD = [-1, 1, 2, 4] => {-1: 1, 1: 1, 2: 1, 4: 1}
//
// min( AB[-1] = 1 CD[1] = 1 ) = 1
// min( AB[1] = 1 CD[-1] = 1 ) = 1
//
// [-2, -2, 0, 0]
// [-2, 0, 0, 2]



// console.log('Expected: 2' + '\n' + 'Output: ' + fourSumCount([1,2],[-2,-1],[-1,2],[0,2]))
console.log('Expected: 6' + '\n' + 'Output: ' + fourSumCount([-1,-1],[-1,1],[-1,1],[1,-1]))
