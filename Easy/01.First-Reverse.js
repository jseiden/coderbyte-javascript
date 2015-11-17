// Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 

function FirstReverse(str) {
  return str === "" ? "" : FirstReverse(str.slice(1)) + str[0];
}

