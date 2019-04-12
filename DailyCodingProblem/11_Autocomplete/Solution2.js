/*
 *
 * Time: O(N)
 * Space: O(N)
 *
 */

// Implement an autocomplete system. 
// That is, given a query string s and a set of all possible query strings, 
// return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

//     d
//    / \
//   o   e
//  /   / \
// g   e   a
//    /     \
//   r       l

function Node() {
  this.children = {};
  this.words = [];
}


class Trie {
  constructor() {
    this.root = new Node();
  }

  traverseToNextNode(word, node, edgeCharacter) {
    node.words.push(word);
    let children = Object.keys(node.children);
    if (!children.includes(edgeCharacter)) { node.children[edgeCharacter] = new Node(); }
    return node.children[edgeCharacter];
  }

  addWord(word) {
    let currentNode = this.root;
    for (let c of word.split('')) {
      currentNode = this.traverseToNextNode(word, currentNode, c);
    }
  }

  search(prefix) {
    let currentNode = this.root;
    for (let c of prefix.split('')) {
      currentNode = currentNode.children[c];
    }
    return currentNode.words;
  }
}


function Trie2() {
  this.root = new Node();
}

Trie2.prototype.traverseToNextNode = function(word, node, edgeCharacter) {
  node.words.push(word);
  let children = Object.keys(node.children);
  if (!children.includes(edgeCharacter)) { node.children[edgeCharacter] = new Node(); }
  return node.children[edgeCharacter];
}

Trie2.prototype.addWord = function(word) {
  let currentNode = this.root;
  for (let c of word.split('')) {
    currentNode = this.traverseToNextNode(word, currentNode, c);
  }
}

Trie2.prototype.search = function(prefix) {
  let currentNode = this.root;
  for (let c of prefix.split('')) {
    currentNode = currentNode.children[c];
  }
  return currentNode.words;
}


var autoComplete = function(s, arr) {
  let t = new Trie2();

  for (let word of arr) { t.addWord(word); }

  console.log(t.search('de'));
  console.log(t.search('d'));
  console.log(t.search(''));
  console.log(t.search('dea'));

};

console.log('Expected: [deer, deal]' + '\n' + 'Output: ' + autoComplete('de', ['dog', 'deer', 'deal']))
