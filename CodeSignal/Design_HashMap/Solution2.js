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

function hashMap(queryType, query) {
	let hm = new HashMap();

	let result = [];
	for (let [i, qt] of queryType.entries()) {
		let q = query[i];
		if (qt === 'insert') {
			result.push(hm.insert(q[0], q[1]));
		} else if (qt === 'addToKey') {
			result.push(hm.addToKey(q[0]));
		} else if (qt === 'addToValue') {
			result.push(hm.addToValue(q[0]));
		} else if (qt === 'get') {
			result.push(hm.get(q[0]));
		}
	}
	return result;	
}


let res = hashMap(["insert", "insert", "addToValue", "addToKey", "get"], [[1,2], [2,3], [2], [1], [3]])
console.log(res)