//Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345".

function DivisionStringified(num1, num2) {
  var initialResult = num1/num2;
  if(Math.floor(initialResult).toString().length < 4) {
    return Math.round(initialResult);
  } else { 
    var result = [];
    var tempNum = Math.floor(initialResult).toString().split("");
    for(var i = tempNum.length -1; i > -1; i--){
      result.unshift(tempNum[i]);
      if((tempNum.length - i) % 3 === 0) {
        result.unshift(",");
      }
    }
  }
  return result.join("");
}
