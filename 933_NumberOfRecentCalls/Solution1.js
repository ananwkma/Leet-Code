/*
 * https://leetcode.com/problems/number-of-recent-calls/
 *
 * Time: O(N^2)
 * Space: O(N)
 */
var RecentCounter = function() {
    this.calls = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.calls.push(t)
    let count = 0
    this.calls.map(call => { if ((t - 3000) <= call) count++ })
    return count
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */

console.log('Expected: [null,1,2,3,3]' + '\n' + 'Output: ' + RecentCounter(["RecentCounter","ping","ping","ping","ping"]
[[],[1],[100],[3001],[3002]]))
console.log('Expected: [null,1,2,3,3]' + '\n' + 'Output: ' + RecentCounter(["RecentCounter","ping","ping","ping","ping","ping"]
[[],[1178],[1483],[1563],[4054],[4152]]))