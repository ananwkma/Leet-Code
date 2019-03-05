class HashMap {
  constructor() {
      this.map = {};
  	this.keyOffset = 0;
  	this.valueOffset = 0;
  }

  insert(x, y) {
  	this.map[x-this.keyOffset] = y;
  }

  get(x) {
  	return this.map[x-this.keyOffset] + this.valueOffset;
  }

  addToKey(x) {
  	this.keyOffset += x;
  }

  addToValue(y) {
	this.valueOffset += y;
  }
}

let hm = new HashMap();
console.log(hm.insert(1,2));
console.log(hm.insert(2,3));
console.log(hm.addToValue(2));
console.log(hm.addToKey(1));
console.log(hm.get(3));
console.log(hm.insert(1,1));
console.log(hm.get(1));

console.log('-----')
console.log(hm.map);
console.log('keyoffset:', hm.keyOffset);
console.log('valueoffset:', hm.valueOffset);