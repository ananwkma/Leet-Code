/*
 *
 * Time: O(X*N)
 * Space: O(M)
 *
 */

// 4
// 1
//  1 1
//    1 1 1
//    1 1 1 1   1
//    1 1 2     2
//  1 2
//    1 2 1     3
// 2
//  2 1
//    2 1 1     4
//  2 2       5

var staircaseClimb = function(N, X) {
  let res = [];

  dfs = (progress, sum) => {
    // console.log(progress)
    if (sum === N) return res.push(progress);
    if (sum > N) return;
    for (let i = 0; i < X.length; i++) {
      let newProgress = [...progress, X[i]]
      let newSum = sum + X[i];
      dfs(newProgress, newSum);
    }
  }

  dfs([], 0);

  console.log(res);
  return res.length;
};

console.log('Expected: 5' + '\n' + 'Output: ' + staircaseClimb(4, [1,2]))
// [1,1,1,1] [2,1,1] [1,2,1] [1,1,2] [2,2]
