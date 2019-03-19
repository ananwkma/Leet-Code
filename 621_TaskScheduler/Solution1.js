/*
 * https://leetcode.com/problems/task-scheduler/
 * 
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 *
 * Time: O()
 * Space: O()
 *
 */

//   2 1 0 2 1 0 2
// 2 1 0 2 1 0 2 1
// A B i A B i A B

// A {
//  quantity: 3
//  space: 0
// }

// { A: { quantity: 3, space: 0 }, B: { quantity: 3, space: 0 } }
// when space is negative, can be added to array

// L  Q  S
// A  2  2      [A]
// B  3 -1
//
// A  2  1      [A, B]
// B  2  2      
//
// A  2  0      [A, B, idle]
// B  2  1
//
// A  

reOrder = (dict, arr, len, n) => {
  let idleFlag = true;
  while (len > 0) {
    // console.log(arr)
    for (let key of Object.keys(dict)) {
      if (dict[key].space <= 0 && dict[key].quantity > 0 && idleFlag) {
        arr.push(key);
        dict[key].quantity--;
        dict[key].space = n;
        idleFlag = false;
        len--;
      }
      else {
        dict[key].space--;
      }
    }
    if (idleFlag) {
      arr.push('idle');
    }
    idleFlag = true;
  }
  // console.log(arr)
}

objectify = (dict, tasks, n) => {
  for (let i = 0; i < tasks.length; i++) {
    let curChar = tasks[i]
    if (dict[curChar]) {
      dict[curChar].quantity++;
    }
    else {
      let char = {
        quantity: 1,
        space: 0,
      }
      dict[curChar] = char;
    }
  }
}

var leastInterval = function(tasks, n) {
  let dict = {};
  let res = [];
  objectify(dict, tasks, n);
  reOrder(dict, res, tasks.length, n);
  return res.length;
};

// console.log('Expected: 6' + '\n' + 'Output: ' + leastInterval(["A","B","C","D","E","F"], 2))
// console.log('Expected: 8' + '\n' + 'Output: ' + leastInterval(["A","A","A","B","B","B"], 2))
// console.log('Expected: 7' + '\n' + 'Output: ' + leastInterval(["A","A","A"], 2))
// console.log('Expected: 3' + '\n' + 'Output: ' + leastInterval(["A","A","A"], 0))
