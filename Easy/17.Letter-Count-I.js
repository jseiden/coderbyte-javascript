// Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed
// and return the first word with the greatest number of repeated letters.
// For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's)
// and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1.
// Words will be separated by spaces. 

function LetterCountI(str) {
  var wordsArr = str.split(" ");
  var winner = -1;
  var count = 0;

  function findDups(word) {
    var checkedLetters = [];
    var totalDups = 0;
    var arr = word.split("");
    for(var i = 0; i < arr.length; i++) {
      var re = new RegExp(arr[i], "g");
      if(checkedLetters.indexOf(arr[i]) === -1 && word.match(re).length > 1) {
        totalDups = totalDups + word.match(re).length;
      }
      checkedLetters.push(arr[i]);
    }
    return totalDups;
  }

  wordsArr.forEach(function(word) {
    if(findDups(word) > count) {
      winner = word;
      count = findDups(word);
    }
  })

  return winner;
}
