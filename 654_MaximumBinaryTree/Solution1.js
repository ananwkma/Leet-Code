/*
 * https://leetcode.com/problems/maximum-binary-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * @param {number[]} nums
 * @return {TreeNode}
 *
 * Time: O(N^2)
 * Space: O(N)
 *
 */

// find max
// 6 idx: 3
// subarrays:
// [3,2,1] idx: 0-2   max of array of smaller idx is left
// [0,5] idx: 4-5     max of array of bigger idx is right


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

findMax = (arr) => {
  let max = -Infinity;
  let maxIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIdx = i;
    }
  }
  return maxIdx;
}

var constructMaximumBinaryTree = function(nums) {

  insertInTree = (arr) => {
    if (arr.length <= 0) return null;
    // console.log(arr)
    let maxIdx = findMax(arr);
    let node = new TreeNode(arr[maxIdx]);
    node.left = insertInTree([...arr.slice(0, maxIdx)]);
    node.right = insertInTree([...arr.slice(maxIdx+1, arr.length)]);
    return node;
  }
  // console.log(root);
  return insertInTree(nums);
};

constructMaximumBinaryTree([3,2,1,6,0,5]);
