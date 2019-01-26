/*
 * https://leetcode.com/problems/number-of-recent-calls/
 *
 * Time: O(N)
 * Space: O(1) (technically can be up to however large the window is 0-3000 if ints)
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
    while (this.calls[0] < (t-3000)) this.calls.shift()
    return this.calls.length
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