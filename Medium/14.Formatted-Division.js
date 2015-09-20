// Using the JavaScript language, have the function FormattedDivision(num1,num2) take both parameters being passed, 
// divide num1 by num2, and return the result as a string with properly formatted commas and 4 significant digits after the decimal place. 
// For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". 
// The output must contain a number in the one's place even if it is a zero. 

function FormattedDivision(num1, num2) {
  var div = (num1/num2).toFixed(4);
  var arr = div.toString().split(".");

  arr[0] = (+arr[0]).toLocaleString("en");
  return arr.join(".");
}


