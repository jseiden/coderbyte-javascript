// Using the JavaScript language, have the function CaesarCipher(str,num) take the str parameter 
// and perform a Caesar Cipher shift on it using the num parameter as the shifting number. 
// A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). 
// Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt"

function CaesarCipher(str, num) {
  var arr = str.split("");
  var result = "";

  var findNewLetter = function(letter, num) {
    var oldCode = letter.charCodeAt(0);
    var upper = letter === letter.toUpperCase();
    var lower = letter === letter.toLowerCase();
    
    // var upperCaseRange = [65, 90];
    // var lowerCaseRange = [96, 122]

    var newCode = "";
    if(upper) {
      if(oldCode + num > upperCaseRange[1]) {
        newCode = 64 + oldCode + num - 90;
      } else {
        newCode = oldCode + num;
      }
    } else if(lower) {
        if(oldCode + num > lowerCaseRange[1]) {
          newCode = 96 + oldCode + num - 122;
        } else {
          newCode = oldCode + num;
        }
    }
    return String.fromCharCode(newCode);    
  }

  arr.forEach(function(letter) {
    if(letter.match(/[^a-z]/i)) {
      result = result + letter;
    } else if(letter.match(/[a-z]/i)){
      result = result + findNewLetter(letter, num);
    }

  })

  return result;
}
console.log(CaesarCipher("coderBYTE", 2));
