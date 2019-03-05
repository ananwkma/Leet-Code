class HashMap {
  constructor() {
      this.map = {};
  }

  insert(x, y) {
  	this.map[x] = y;
  }

  get(x) {
  	return this.map[x];
  }

  addToKey(x) {
  	let newMap = {};
  	let keys = Object.keys(this.map);
  	for (let key of keys) {
  		newMap[parseInt(key)+x] = this.map[key];
  	}

  	this.map = newMap;
  }

  addToValue(y) {
	let newMap = {};
  	let keys = Object.keys(this.map);
  	for (let key of keys) {
  		newMap[key] = this.map[key] + y;
  	}
  	this.map = newMap;
  }
}

let hm = new HashMap();
console.log(hm.insert(1,2));
console.log(hm.insert(2,3));
console.log(hm.addToValue(2));
console.log(hm.addToKey(1));
console.log(hm.get(3));