/*
 * https://leetcode.com/problems/time-based-key-value-store/
 */

// Time Limit Exceeded
// love[10] = 'high'
// love[20] = 'low'

var TimeMap = function() {
    this.obj = {};
};

TimeMap.prototype.set = function(key, value, timestamp) {
    this.obj[key] = {
        ...this.obj[key], [timestamp]: {
            value,
        }
    }
};

TimeMap.prototype.get = function(key, timestamp) {
  let res = '';
  let latestTime = 0;
  for (let curTime of Object.keys(this.obj[key])) {
    if (curTime <= timestamp && curTime >= latestTime) res = this.obj[key][curTime].value;
  }
  return res;
};
