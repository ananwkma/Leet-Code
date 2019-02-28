// you came up with a strategy before you went thru 3 real, thorough solutions

// Just talk about first impressions of run time. "i think thsi will be linear /squared/wahtever"

// Justify your runtimes! At least say "We will iterate the array..."

// Lead the conversation by saying "I like this current solution so far. Is it ok if i start by implmeneting this and see how to optomize this later?"

// If stuck, go back to an example. Dot his many times throughtout an interview.

// go through an example especially when you don't know the overall strategy.

//assume things exist! it will allow you to think at different layers of abstractions.

// Derive the run time by examining code!! <= same spirit as "going through an example"


//https://leetcode.com/problems/find-and-replace-pattern/




/*
Jack live comments:

Feedback

You jumped into strategy too fast
Try 3 example first

really try to experiment each one.

your strategies take too long to describe.
it should be 3 sentences.

Initial runtime:
O(N) 

Initila space:
O(N)

N is size of array

It's a mystery how you came up with those. Give an explanation for where they came from. Again these should be short.

It's ok to not come up w/ another solution

You should initiate "is it ok if i begin by coding this solution up?"

you are quiet for too long about how to write noramlize.

when you are stuck writing it you should come up with a couple of examples.
Too much code level detail.
 'use charAt and push to array' is trivial

You wrote normalize without knowing exactly what your strategy was. (strategy = conceptual solution)

too fancy! just use if statements and for loops. your ternary tripped you. it was also hard for me as an interviewer to read.

You are stuck at code-level details for 90% of the interview.

i recommend not overriding values. you overrode pattern with its noralized function. it works, but people might bat an eye.


assume trivial things that dont need helper functions just work! Ask your interviewer if they let you get away with it.


your runtime explanations are not convincing! you were right but i wasn't convinced. <




*/
['aaa','cbc', 'anm', 'zzz'] 'mmm'   => ['aaa', 'zzz']
['1', '1', '1' ,'1' '1'] '1'        => ['a', 'b', 'c' ,'d' 'e']                

// aasmifi 1,1,2,3,4,5,4

// normalize
// normalize the pattern
// normalize all entries and compare to the pattern, if match , add to result.
// return array
// O(N) O(N)



// amg => 123
// aba => 121
// zzg => 112

// counter, tracker


//time: O(str length) space: O(str length) 
normalize = (str) => {
  let result = [];
  let track = {}; // { a: 1, m: 2, g:3 }
  let counter = 1;
  for (let c of str) {
    if (c in track) {
        result.push(track[c]);
    } else {
      track[c] = counter;
      counter += 1;
    }
  }
  return result;
}


normalize = (str) => { }




var findAndReplacePattern = function(words, pattern) {
  let res = []
  let pattern = normalize(pattern)
  for (let i = 0; i < words.length; i++) {
    if (equal(normalized(words[i]), pattern)) res.push(words[i])
  }
  return res
};


console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], 'abb'));  
//Output: ["mee","aqq"]