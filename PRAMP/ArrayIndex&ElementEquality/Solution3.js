/*
 * https://www.pramp.com/challenge/jKoA5GAVy9Sr9jGBjz04
 *
 * Time: O(logN)
 * Space: O(1)
 */

// cleaner Solution2

function indexEqualsValueSearch(arr) {
  let hi = arr.length-1
  let lo = 0
  while (hi >= lo) {
    let mid = Math.floor((hi + lo)/2)
    if (mid > arr[mid]) lo = mid + 1
    else if (arr[mid] === mid && (mid === 0 || arr[mid-1] !== (mid-1))) return mid
    else hi = mid - 1
  }
  return -1
}

console.log(indexEqualsValueSearch([-2,1,2,3,6]))