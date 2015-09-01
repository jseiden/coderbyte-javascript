// Using the JavaScript language, have the function RunLength(str) take the str parameter being passed 
// and return a compressed version of the string using the Run-length encoding algorithm. 
// This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. 
// For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols. 

function RunLength(str) {
  var arr = str.split("");
  var strLength = str.length;
  var result = "";
  var j = 0;

  function oneCount(subArr) {
    var count = 1;
    var i = 1;
    var testLetter = subArr[0];
    var pair;
    while(subArr[i] === testLetter) {
      count++;
      i++;
    }
    j = j + count;
    arr = arr.slice(count);
    pair = count.toString().concat(testLetter);
    result += pair;
    return [testLetter, count];
  }

  while(j < strLength) {
    oneCount(arr);
  }

  return result;

}
