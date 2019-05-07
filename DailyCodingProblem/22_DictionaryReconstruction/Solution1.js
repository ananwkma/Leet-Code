// Time: O(N)
// Space: O(N)

// Given a dictionary of words and a string made up of those words (no spaces), 
// return the original sentence in a list. 
// If there is more than one possible reconstruction, 
// return any of them. If there is no possible reconstruction, then return null.

// For example, given the set of words 'quick', 'brown', 'the', 'fox', 
// and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

// Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', 
// and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] 
// or ['bedbath', 'and', 'beyond'].


// thequickbrownfox
// t    thequickbrownfox    []
// th     thequickbrownfox    []
// the    quickbrownfox     [the]
// q    quickbrownfox     [the]
// qu     quickbrownfox     [the]
// qui    quickbrownfox     [the]
// quic   quickbrownfox     [the]
// quick  brownfox        [the, quick]

const dictionaryReconstruction = function(arr, str) {
  let dict = new Set;
  let result = [];

  for (word of arr) {
    dict.add(word);
  }

  dfs = (progress, remaining, res) => {
    // console.log(res, progress, remaining)
    // if (result.length > 0) return;
    if (remaining.length === 0) return result = [...res];
    if (remaining.length === progress.length) return;

    let newProgress = progress + remaining[progress.length];

    dfs (newProgress, remaining, res);

    if (dict.has(newProgress)) {
      let newRemaining = remaining.slice(progress.length+1);
      let newRes = [...res, newProgress];
      newProgress = '';
      dfs (newProgress, newRemaining, newRes);
    }
  }

  
  dfs ('', str, []);
  return result;
}; 

console.log('Expected: [the, quick, brown, fox]' + '\n' + 'Output: ' + dictionaryReconstruction(['quick', 'brown', 'the', 'fox'], 'thequickbrownfox'))
console.log('Expected: [bed, bath, and, beyond] ' + '\n' + 'Output: ' + dictionaryReconstruction(['be', 'bed', 'bath', 'and', 'bedbath', 'beyond'], 'bedbathandbeyond'))
console.log('Expected: null' + '\n' + 'Output: ' + dictionaryReconstruction(['bed', 'bath', 'bedbath'], 'bedbathandbeyond'))
