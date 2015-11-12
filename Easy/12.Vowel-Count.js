// Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed
// and return the number of vowels the string contains
// (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge. 

//function VowelCount(str) {
  //var count = 0;
  //str.split("").forEach(function(letter) {
    //if(letter.match(/[aeiou]/i)) {
     //count++;
    //}
  //});
  //return count;
//}

function VowelCount(str) {
  return str.split("").filter(function (letter) { 
    return letter.match(/[aeiou]/i);
  }).length;
}

