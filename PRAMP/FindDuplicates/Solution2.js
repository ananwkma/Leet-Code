/*
 * https://www.pramp.com/challenge/3QnxW6xoPLTNl5jX5LM1
 *
 * Time: O(logN)
 * Space: O(N)
 */

binarySearch = (small, big) => {
  let res = []
  for (let i = 0; i < small.length; i++) {
    let [hi, lo] = [big.length - 1, 0]
    while (hi >= lo) {
        let target = Math.floor((hi - lo) / 2) + lo
        if (small[i] === big[target]) {
            res.push(small[i])
            break
        }
        if (small[i] > big[target]) lo = target + 1
        if (small[i] < big[target]) hi = target - 1
    }
  }
  return res
}

function findDuplicates(arr1, arr2) {
  return arr1.length < arr2.length ? binarySearch(arr1, arr2) : binarySearch(arr2, arr1)
}

console.log(findDuplicates([1, 2, 3, 5, 6, 7], [3, 6, 7, 8, 20]))
console.log(findDuplicates([1, 2, 3, 5, 6, 7], [1, 5]))
