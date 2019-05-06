/*
 *
 * Time: O(N^2)
 * Space: O(N)
 *
 */

// Given an array of time intervals (start, end) for classroom lectures 
// (possibly overlapping), find the minimum number of rooms required.

// For example, given [(30, 75), (0, 50), (60, 150)], you should return 2


// check if two lines are intersecting
// (30, 75), (0, 50)
//
// both coords have to be greater than upper or lesser than lower
//
// 0 < 30, 50 !< 30
// 0 !> 75, 50 !> 75
//
// [[(30, 75)], [(0, 50)]]
// 
// 60 !< 30, 150 !< 30
// 60 !> 75, 150 > 75
// 
// 60 !< 0, 150 !< 0
// 60 > 50, 150 > 50  PASS
//
// [[(30, 75)], [(0, 50), (60, 150)]] len = 2
// 
// (51, 59) > (0. 50)
// (51, 59) < (60, 150)
// insert (51, 59) in index 1
// if satisfies one pair but fails another pair, fails entire set

pairIsMore = (pair, compare) => {
  if ((pair[0] > compare[1]) && (pair[1] > compare[1])) return true;
  else return false;
}

pairIsLess = (pair, compare) => {
  if ((pair[0] < compare[0]) && (pair[1] < compare[0])) return true;
  else return false;
}

canInsert = (pair, res, i, j) => {
  if (pairIsLess (pair, res[i][j]) && j === 0) return 0;
  else if (pairIsMore (pair, res[i][j]) && j === res[i].length-1) return res.length;
  else if ((pairIsMore (pair, res[i][j])) && (res[i][j+1]) && (pairIsLess (pair, res[i][j+1]))) return i;
  return -1;
}

compareToAllAdded = (res, pair) => {
  if (res.length === 0) return res.push([pair]);
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i].length; j++) {
      let idx = canInsert (pair, res, i, j);
      if (idx >= 0) return res[i].splice(idx, 0, pair);
    }
  }
  return res.push([pair]);
}

minRooms = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    compareToAllAdded (res, arr[i]);
  }
  return res.length;
}

console.log('Expected: 2', 'Actual: ', minRooms([[30, 75], [0, 50], [60, 150]]));
