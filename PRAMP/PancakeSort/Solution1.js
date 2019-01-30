/*
 * https://www.pramp.com/challenge/3QnxW6xoPLTNl5jX5LM1
 *
 * Time: O(N^2)
 * Space: O(1)
 */
 
function pancakeSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-1; j++) {
      if (arr[j] > arr[j+1]) {
        let subArr = []
        subArr.push(arr[j])
        subArr.push(arr[j+1])
        flip(subArr, 2)
        arr[j] = subArr[0]
        arr[j+1] = subArr[1]
      }
    }
  }
  return arr
}

flip = (arr, k) => {
  for (let i = 0, j = k-1; i < j; i++, j--) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
  return arr
}


console.log('Expected: [1,1,3] ' + 'Actual: ' + pancakeSort([1,3,1]))
