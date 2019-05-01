// x y z

// x                1
// x y              2
// x y y            3
// x y y z          4
// y y z y z y x    7

// xyyzyzyx

// double for loop
// check only characters after char at i
// validate if all characters are present
// if true compare to minimum length
// return min string

// ['x','y','z']
// xyyzyzyx

// x                1
// x y              2       y       1
// x y y            3       y y     2
// x y x x y z      4       y y z   3
//       ^   ^
// res = 'x yxy z'
// O(N)

const compareToArray = (str, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (str.indexOf(arr[i]) === -1) return false;
  }
  return true;
}

// runtime: O(N^2) * O(N) = O(N^3)
// space: O(1)

function getShortestUniqueSubstring(arr, str) {
  let result = "";
  let resLen = Infinity; 
  
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j <= str.length; j++) {
      let curStr = str.substring(i, j);
      //console.log(curStr);
      if (compareToArray(curStr, arr)) {
        if (curStr.length < resLen) {
          result = curStr;
          resLen = curStr.length;
        }
      };
    }
  }
  return result;
}

console.log('Expected: zyx' + '\n' + 'Output: ' + getShortestUniqueSubstring(['x','y','z'], "xyyzyzyx"))
console.log('Expected: ' + '\n' + 'Output: ' + getShortestUniqueSubstring(["A"], ""))
console.log('Expected: ' + '\n' + 'Output: ' + getShortestUniqueSubstring(["A"], "B"))
console.log('Expected: A' + '\n' + 'Output: ' + getShortestUniqueSubstring(["A"], "A"))
console.log('Expected: BANC' + '\n' + 'Output: ' + getShortestUniqueSubstring(["A","B","C"], "ADOBECODEBANCDDD"))
console.log('Expected: KADOBECODEBANCDDDEI' + '\n' + 'Output: ' + getShortestUniqueSubstring(["A","B","C","E","K","I"], "KADOBECODEBANCDDDEI"))
console.log('Expected: ' + '\n' + 'Output: ' + getShortestUniqueSubstring(["x","y","z","r"], "xyyzyzyx"))




