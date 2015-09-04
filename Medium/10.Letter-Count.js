// Using the JavaScript language, have the function LetterCount(str) take the str parameter being passed 
// and return the first word with the greatest number of repeated letters. 
// For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. 
// If there are no words with repeating letters return -1. Words will be separated by spaces.

function LetterCount(str) {
  var wordArr = str.split(" ");
  var result = wordArr[0];
  var resultCount = findMostRepeats(wordArr[0]);

  function findMostRepeats(word) {
    var letterArr = word.split("");
    var largestCount = 0;
    var storage = {};
    for(var i = 0; i < letterArr.length; i++) {
      if(storage.hasOwnProperty(letterArr[i])){
        storage[letterArr[i]] = storage[letterArr[i]] + 1;
      }  else {
        storage[letterArr[i]] = 1;
      }
      if(storage[letterArr[i]] > largestCount) {
        largestCount = storage[letterArr[i]];
      }
    }
    return largestCount;
  }

  for(var j = 0; j < wordArr.length; j++) {
    var tempCount = findMostRepeats(wordArr[j]);
    if(tempCount > resultCount) {
      resultCount = tempCount; 
      result = wordArr[j];
    }
  }

  return resultCount > 1 ? result : -1;
}

