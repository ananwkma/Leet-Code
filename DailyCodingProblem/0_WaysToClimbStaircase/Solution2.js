/*
 *
 * Time: O(N)
 * Space: O(H)
 *
 */

// 0  0 []
// 1  1 [1]
// 2  2 [1,1] [2]
// 3  3 [1,1,1] [1,2] [2,1]
// 4  5 [1,1,1,1] [1,2,1] [2,1,1] [1,1,2] [2,2]
// 5  8 [1,1,1,1,1] [2,1,1,1] [1,2,1,1] [1,1,2,1] [1,1,1,2] [2,2,1] [2,1,2] [1,2,2]
// 
// Only works for 1,2

var staircaseClimb = function(N, X) {
  let res = 0;

  dfs = (progress, i) => {
    let newProgress = [...progress];
    if (i > N) return res = newProgress[newProgress.length - 1];
    if (i === 1) newProgress.push(1);
    else if (i === 2) newProgress.push(2);
    else {
      let sum = progress[i-2] + progress[i-3];
      newProgress.push(sum);
    }
    dfs(newProgress, i+1);
  }

  dfs([], 1)

  return res;
};

console.log('Expected: 5' + '\n' + 'Output: ' + staircaseClimb(4, [1,2]))
// [1,1,1,1] [2,1,1] [1,2,1] [1,1,2] [2,2]
