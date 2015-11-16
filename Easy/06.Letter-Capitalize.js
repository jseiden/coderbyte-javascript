// Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
// Words will be separated by only one space.

function LetterCapitalize(str) {
  var arr = str.split(' ');
  var result = [];

  arr.forEach(function(word){
    var a = word.split('');
    a[0] = a[0].toUpperCase();
    result.push(a.join(''));
  });

  return result.join(' ');
}


