/*
 * https://www.pramp.com/challenge/jKoA5GAVy9Sr9jGBjz04
 *
 * Time: O(N)
 * Space: O(1)
 */

// iterate through array with a for loop
// if i === arr[i] return i 
// if we're at the last index return -1

function indexEqualsValueSearch(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr[i]) return i
  }
  return -1
}







// [-1, 1, 2, 4] 
// pointer at midpoint arr.length / 2
// set min
// if pointer is smaller than value at arr[pointer] high = pointer
// larger low = pointer
// if match set min
// if low > high return -1

function indexEqualsValueSearch(arr) {
  let min = undefined 
  let hi = arr.length-1
  let lo = 0
  while (hi >= lo) {
    let mid = lo + Math.floor((hi - lo)/2)
    if (arr[mid] === mid) {
      min = mid
      if (mid > 0 && arr[mid-1] !== (mid-1)) return min
      hi = mid - 1
    }
    else if (mid < arr[mid]) hi = mid - 1
    else if (mid > arr[mid]) lo = mid + 1
  }
  return (min !== undefined) ? min : -1
}

console.log(indexEqualsValueSearch([-1,0,2,6]))