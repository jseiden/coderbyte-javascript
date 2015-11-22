// Using the JavaScript language, have the function NumberEncoding(str) take the str parameter 
// and encode the message according to the following rule: encode every letter into its corresponding numbered position in the alphabet. 
// Symbols and spaces will also be used in the input. For example: if str is "af5c a#!" then your program should 1653 1#!. 

function NumberEncoding(str) {
  var res = str.split("").map(function(ch) {
    return ch.match(/[a-z]/i) ? ch.charCodeAt(0) - 96 : ch;
    
  }).join("");

  return res;
}


