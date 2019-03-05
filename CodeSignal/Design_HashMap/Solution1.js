function hashMap(queryType, query) {
    this.obj = {};
    this.count = 0;
    insert ([ 1, 2 ])
    console.log('obj',this.obj)
    console.log('count',this.count)
    return this.count;
}

let insert = (x) => {
    console.log(x[0])
    console.log(x[1])
    console.log('obj',this.obj)
    return this.obj[x[0]] = x[1];
}

let get = (x) => {
    return this.count += parseInt(this.obj[x]);
}

let addToKey = (x) => {
    for (let key of Object.keys(this.obj)) {
        let newKey = parseInt(key) + parseInt(x);
        key = newKey;
    }
}

let addToValue = (y) => {
    for (let key of Object.keys(this.obj)) {
        let newValue = parseInt(this.obj[key]) + parseInt(y);
        this.obj[key] = newValue;
    }
}

hashMap(["insert", "insert", "addToValue", "addToKey", "get"], [[1,2], [2,3], [2], [1], [3]])

// insert ([ 1, 2 ])
// insert ([ 2, 3 ])
// addToValue ([ 2 ])
// addToKey ([ 1 ])
// get ([ 3 ])

/*
queryType: ["insert", 
 "insert", 
 "addToValue", 
 "addToKey", 
 "get"]
query: [[1,2], 
 [2,3], 
 [2], 
 [1], 
 [3]]
 
 Expected: 5
 */
