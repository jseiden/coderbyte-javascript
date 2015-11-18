// Using the JavaScript language, have the function LookSaySequence(num) take the num parameter being passed 
// and return the next number in the sequence according to the following rule:
// to generate the next number in a sequence read off the digits of the given number, counting the number of digits in groups of the same digit. 
// For example, the sequence beginning with 1 would be: 1, 11, 21, 1211, ... 
// The 11 comes from there being "one 1" before it and the 21 comes from there being "two 1's" before it. 
// So your program should return the next number in the sequence given num. 

function LookSaySequence(num) {
  var str = "" + num;
  var strArr = str.split("");
  var resArr = [];
  var tempArr = [];
  var res;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      tempArr.push(str[i]);
    } else if (str[i] !== str[i+1]) {
      tempArr.push(str[i]);
      resArr.push(tempArr.join(""));
      tempArr.length = 0;
    }
  }

  res = resArr.map(function(n) {
    return "" + n.length + n[0];
  }).join("");

  return res;
}

