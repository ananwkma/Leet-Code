
const EXAMPLE_1 = { a: 1, b: { c: 3 }};

//flatten(EXAMPLE_1) // { 'a': 1, 'b.c': 3 }

// a : 1, 
// b : { c : 3 }
// b : { c : 3 , d: 4 }

// { 'a': 1, 'b.c': 3, 'b.d' : 4 }


let res = {};

dfs = (progress, currentNode, result) => {
	if (typeof currentNode === 'number') {
		result[progress.slice(1)] = currentNode;
	} else {
		Object.keys(currentNode).map(key => {
			let newProgress = progress + '.' + key;
			let newNode = currentNode[key];
			dfs (newProgress, newNode, result);
		})
	}
}


dfs ('', EXAMPLE_1, res);

console.log(res)
/*

let dict = {};

dfs = (entry, progress) => {
	if (!isNaN(entry.value)) dict[progress] = entry.value;
	else Object.entries(entry.value).map( newEntry => {
		dfs(newEntry, progress + '.' + newEntry.key);
	})
}

Object.entries(o).map(k => {
	dfs(entry, entry.key);
})

*/