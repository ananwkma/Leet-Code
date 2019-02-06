/*
 * https://leetcode.com/problems/design-hashset/
 * 
 */

/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.arr = []
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if (this.arr.indexOf(key) === -1) this.arr.push(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let idx = this.arr.indexOf(key)
    if (idx >= 0) this.arr.splice(idx,1)
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    return (this.arr.indexOf(key) >= 0)
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = Object.create(MyHashSet).createNew()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
