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


// Time: O(MN)
// Space: O(M)

function getShortestUniqueSubstring(arr, str) {
  let minStr = "";
  let minLen = Infinity;
  for (let i = 0; i < str.length; i++) {
    let s = new Set;
    let endIdx = i;

    while (s.size < arr.length) {
      if (endIdx === str.length) break;
      let curChar = str[endIdx];
      if (arr.indexOf(curChar) >= 0) s.add(curChar);
      endIdx++;
    }

    let curSubStr = str.substring(i, endIdx);
    if (curSubStr.length < minLen && s.size === arr.length) {
      minStr = curSubStr;
      minLen = curSubStr.length;
    }
  }
  return minStr;
}

console.log('Expected: zyx' + '\n' + 'Output: ' + getShortestUniqueSubstring(['x','y','z'], "xyyzyzyx"))
console.log('Expected: ' + '\n' + 'Output: ' + getShortestUniqueSubstring(["A"], ""))
console.log('Expected: ' + '\n' + 'Output: ' + getShortestUniqueSubstring(["A"], "B"))
console.log('Expected: A' + '\n' + 'Output: ' + getShortestUniqueSubstring(["A"], "A"))
console.log('Expected: BANC' + '\n' + 'Output: ' + getShortestUniqueSubstring(["A","B","C"], "ADOBECODEBANCDDD"))
console.log('Expected: KADOBECODEBANCDDDEI' + '\n' + 'Output: ' + getShortestUniqueSubstring(["A","B","C","E","K","I"], "KADOBECODEBANCDDDEI"))
console.log('Expected: ' + '\n' + 'Output: ' + getShortestUniqueSubstring(["x","y","z","r"], "xyyzyzyx"))




