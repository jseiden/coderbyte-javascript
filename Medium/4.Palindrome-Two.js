// Using the JavaScript language, have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, 
// (the string is the same forward as it is backward) otherwise return the string false. 
// The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. 
// For example: "Anne, I vote more cars race Rome-to-Vienna" should return true. 
function PalindromeTwo(str) {
  var arr = str.toLowerCase().split(/[^a-z]/i);
  var forward = arr.join("");
  // split and join twice because it was reversing the words- not the letters 
  var backward = arr.join("").split("").reverse().join("");
  return forward === backward ? true : false;  
}
console.log(PalindromeTwo("Noel - sees Leon"));
