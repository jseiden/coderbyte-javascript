// Using the JavaScript language, have the function DashInsertII(str) insert dashes ('-') between each two odd numbers 
// and insert asterisks ('*') between each two even numbers in str. 
// For example: if str is 4546793 the output should be 454*67-9-3. Don't count zero as an odd or even number. 

function DashInsertII(num) {
  var arr = num.toString().split('');
  var i = 0;
  var len = arr.length;

  while (i < len-1) {
    if (isOdd(arr[i]) && isOdd(arr[i+1])) {
      arr.splice(i+1, 0, "-");
      i += 2;
    } else if (isEven(arr[i]) && isEven(arr[i+1])) {
      arr.splice(i+1, 0, "*");
      i += 2;
    } else {
      i += 1;
    }
    len = arr.length;
  }
  
  return arr.join("");
}


function isOdd(n) {
  return n % 2 === 0 ? false : true;
}
function isEven(n) {
  return n % 2 === 0 && n != 0 ? true : false;
}
