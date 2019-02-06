/*
 * https://www.pramp.com/challenge/BrLMj8M2dVUoY95A9x3X
 *
 * Time: O(N)
 * Space: O(1)
 */

// take initial z value
// find maximum z value
// return difference of max and init, if negative return 0
// if one point, return 0

function calcDroneMinEnergy(route) {
  if (route.length <= 1) return 0
  let iZ = route[0][2]
  let max = 0
  for (let i = 0; i < route.length; i++) {
  	if (route[i][2] > max) max = route[i][2] 
  }
  let res = max - iZ
  return res > 0 ? res : 0
}

console.log('Expected: 5' + '\n' + 'Output: ' + calcDroneMinEnergy([[0,2,10],[3,5,0],[9,20,6],[10,12,15],[10,10,8]]))