/*
 * https://leetcode.com/problems/time-based-key-value-store/
 */

// love[10] = 'high'
// love[20] = 'low'

var TimeMap = function() {
  this.obj = {};
  this.max = 0;
};

TimeMap.prototype.set = function(key, value, timestamp) {
  this.obj[key] = {
    ...this.obj[key], [timestamp]: {
      value,
    }
  }
  if (timestamp > this.max) this.max = timestamp;
};

TimeMap.prototype.get = function(key, timestamp) {
  let res = '';
  let keys = Object.keys(this.obj[key]);
  let [lo, hi] = [0, keys.length-1];

  while (hi >= lo) {
    let mid = Math.floor((hi+lo)/2);
    if (mid === timestamp) return this.obj[key][keys[mid]].value;
    if (mid < timestamp) lo = mid + 1;
    if (mid > timestamp) hi = mid - 1;
    res = this.obj[key][keys[mid]].value;
  }

  return res;
};