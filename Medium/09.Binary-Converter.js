// Using the JavaScript language, have the function BinaryConverter(str) return the decimal form of the binary value. 
// For example: if 101 is passed return 5, or if 1000 is passed return 8. 

function BinaryConverter(str) {
  var total = 0;
  var arr = str.split("");
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === "1") {
      total += Math.pow(2, arr.length - i - 1);
    }
  }
  return total;
}

// it can also be done like this
// function BinaryConverter(str) {
  // return parseInt(str, 2);
// }
