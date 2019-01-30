/*
 * https://www.pramp.com/challenge/3QnxW6xoPLTNl5jX5LM1
 *
 * Time: O(N^2)
 * Space: O(1)
 */
 
function pancakeSort(arr) {
  for (let i = arr.length-1; i > 0; i--) {
    let maxIdx = findIndexOfMax(arr, i)
    flip(arr, maxIdx)
    flip(arr, i)
  }
  return arr
}

findIndexOfMax = (arr, k) => {
  let max = 0
  for (let i = 0; i <= k; i++) {
    if (arr[i] > arr[max]) max = i
  }
  return max
}

flip = (arr, k) => {
  for (let i = 0; i < k/2; i++) {
    let tmp = arr[i]
    arr[i] = arr[k-i]
    arr[k-i] = tmp
  }
  return arr
}

console.log('Expected: [1,2] ' + 'Actual: ' + pancakeSort([1,2]))
console.log('Expected: [1,1,3] ' + 'Actual: ' + pancakeSort([1,3,1]))
console.log('Expected: [1,2,3,4,5,6] ' + 'Actual: ' + pancakeSort([3,1,2,4,6,5]))