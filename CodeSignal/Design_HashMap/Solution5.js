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
    let keys = Object.keys(this.map);
    let newMap = {};
    for (let key of keys) {
      let newKey = parseInt(key) + x;
      newMap[newKey] = this.map[key];
    }
    this.map = newMap;
  }

  addToValue(y) {
    for (let key of Object.keys(this.map)) {
      this.map[key] += y;
    }
  }
}

let hm = new HashMap();

function hashMap(queryType, query) {
  let hm = new HashMap();
  let acc = 0;

  for (let [i, qt] of queryType.entries()) {
    let q = query[i];
    switch (qt) {
      case 'insert': {
        hm.insert(q[0], q[1]);
        break;
      } 
      case'addToKey': {
        hm.addToKey(q[0]);
        break;
      } 
      case 'addToValue' : {
        hm.addToValue(q[0]);
        break;
      } 
      case 'get': {
        let val = hm.get(q[0])
        acc += val;
        break;
      }
      default: 
    }
  }
  return acc; 
}

let res = hashMap(["insert", "insert", "addToValue", "addToKey", "get"], [[1,2], [2,3], [2], [1], [3]])
console.log("Expected: 5", "Actual:", res)

let res2 = hashMap (["insert", "addToValue", "get", "insert", "addToKey", "addToValue", "get"], [[1,2], [2], [1], [2,3], [1], [-1], [3]])
console.log("Expected: 6", "Actual:", res2)
