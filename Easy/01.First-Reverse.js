// Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 

function FirstReverse(str) {
  return str === "" ? "" : FirstReverse(str.slice(1)) + str[0];
}

//function FirstReverse(str) {
  //var result = [];
  //str.split("").forEach(function(letter) { 
    //result.unshift(letter);
  //});
  //return result.join("");
//}

//function FirstReverse(str) {
  //return str.split("").reverse().join("");
//}

