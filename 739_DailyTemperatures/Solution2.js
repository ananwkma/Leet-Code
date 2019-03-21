/*
* https://leetcode.com/problems/daily-temperatures/
* 
* @param {number[]} T
* @return {number[]}
*
* Time: O(N)
* Space: O(N)
*
*/

// 0  1  2  3  4  5  6  7     idx
// 73 74 75 71 69 72 76 73    val
// 1  1  4  2  1  1  0  0     res
// 
// 73                     [0 0 0 0 0 0 0 0]
// (73) 74                [1 0 0 0 0 0 0 0]
// (74) 75                [1 1 0 0 0 0 0 0]
// 75 71                  [1 1 0 0 0 0 0 0]
// 75 71 69               [1 1 0 0 0 0 0 0]
// 75 71 (69) 72          [1 1 0 1 0 0 0 0]
// 75 71 (72) 76          [1 1 0 1 0 1 0 0]
// 75 (71) 76             [1 1 0 1 2 1 0 0]
// (75) 76                [1 1 4 1 2 1 0 0]
// (76) 73                [1 1 4 1 2 1 0 0]
// (73)                   [1 1 4 2 1 1 0 0]

function Temperature(val, idx) {  
  this.val = val;
  this.idx = idx;
}

var dailyTemperatures = function(T) {
  let res = new Array(T.length);
  let i = 0;
  let first = new Temperature(T[i], i);
  let stack = [first];

  while (i < T.length) {
    i++;

    while (stack[stack.length-1] && T[i] > stack[stack.length-1].val) {
      let topOfStack = stack[stack.length-1];
      let idxDiff = i - topOfStack.idx;
      res[topOfStack.idx] = idxDiff;
      stack.pop();
    }
    let temp = new Temperature(T[i], i);
    if(T[i]) stack.push(temp)
  }
  
  for (let i = 0; i < stack.length; i++) {
    res[stack[i].idx] = 0;
  }
  return res;

};

console.log('Expected: [1, 1, 4, 2, 1, 1, 0, 0]' + '\n' + 'Output: ' + dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
