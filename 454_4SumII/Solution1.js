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
 * Space: O()
 *
 */

const searchForOpposite = (target, arr) => {
    let [lo, hi, count] = [0, arr.length-1, 0];
    while (lo <= hi) {
        let mid = lo + Math.floor((hi-lo)/2);
        if (arr[mid] === target) {
            let checkLow = checkHigh = mid;
            while (arr[checkLow-1] !== null && arr[checkLow-1] === target) {
                count++;
                checkLow--;
            }
            while (arr[checkHigh+1] !== null && arr[checkHigh+1] === target) {
                count++;
                checkHigh++;
            }
            count++;
            return count;
        }
        else if (arr[mid] > target) hi = mid - 1;
        else if (arr[mid] < target) lo = mid + 1;
    }
    return count;
}

const compareArrays = (arr1, arr2) => {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        let target = arr1[i] === 0 ? 0 : arr1[i]*-1
        count += searchForOpposite(target, arr2);
    }
    return count;
}

const addArrays = (arr1, arr2) => {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            newArr.push(arr1[i] + arr2[j]);
        }
    }
    newArr = newArr.sort((a,b) => {return a-b})
    return newArr;
}

var fourSumCount = function(A, B, C, D) {
    let AB = addArrays(A, B);
    let CD = addArrays(C, D);
    return compareArrays(AB, CD);
};

// AB = [-1, 0, 0, 1]
// CD = [-1, 1, 2, 4]
// ABCD = [-2, 1, 0, 3, -1, 2, 1, 4, -1, 2, 1, 4, 0, 3, 2, 5]

// 


console.log('Expected: 2' + '\n' + 'Output: ' + fourSumCount([1,2],[-2,-1],[-1,2],[0,2]))
