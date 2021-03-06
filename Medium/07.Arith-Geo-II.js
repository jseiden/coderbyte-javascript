// Using the JavaScript language, have the function ArithGeoII(arr) take the array of numbers stored in arr and 
// return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. 
// If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, 
// where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. 
// Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters,
// 0 will not be entered, and no array will contain all the same elements. 

function ArithGeoII(arr) {
  var arith = true;
  var geo = true;

  function isArith(num1, num2, num3) {
    return num2 - num1 === num3 - num2 ? true : false;
  }

  function isGeo(num1, num2, num3) {
    return num2/num1 === num3/num2 ? true : false;
  }

  for(var i = 1; i < arr.length - 1; i++) {
    if(!isArith(arr[i-1], arr[i], arr[i+1])) {
      arith = false;
    }
    if(!isGeo(arr[i-1], arr[i], arr[i+1])) {
      geo = false;
    }
  }

  return arith ? "Arithmetic" : geo ? "Geometric" : -1;
}

