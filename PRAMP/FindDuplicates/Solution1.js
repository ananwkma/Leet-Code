/*
 * https://www.pramp.com/challenge/15oxrQx6LjtQj9JK9XlA
 *
 * Time: O(N)
 * Space: O(N)
 */

function findDuplicates(arr1, arr2) {
  let set1 = new Set()
  let res = []
  putIntoSet(arr1, set1)
  
  for (let i = 0; i < arr2.length; i++) {
    if (set1.has(arr2[i])) res.push(arr2[i])
  }
  return res
}

putIntoSet = (arr, set) => {
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i])
  }
}

console.log(findDuplicates([1, 2, 3, 5, 6, 7], [3, 6, 7, 8, 20]))
