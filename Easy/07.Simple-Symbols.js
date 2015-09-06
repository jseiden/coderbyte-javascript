// Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed
// and determine if it is an acceptable sequence by either returning the string true or false.
// The str parameter will be composed of + and = symbols with several letters between them 
// (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol.
// So the string to the left would be false. The string will not be empty and will have at least one letter.

function SimpleSymbols(str){
  var arr = str.split("");
  for(var i = 0 ; i < arr.length; i++) {
    // i flag in regex does case insensitive search
    if(arr[i].match(/[a-z]/i)) {
      if(arr[i+1] !== "+" || arr[i-1] !== "+") {
        return false;
      }
    }
  }
  return true;
}
