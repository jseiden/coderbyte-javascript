//Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string

function Palindrome(str) {
  var txt = str.replace(/\s/i, "");
  var revTxt = txt.split("").reverse().join("");
  return txt === revTxt ? true : false;
}

/*
function Palindrome(str) {
  str = str.replace(/\s/g, "");
  if(str.length === 1) {
    return true;
  }
  var mid = Math.floor(str.length/2);
  var arr = str.length % 2 === 0 ? str.split("") : (str.slice(0, mid) + str.slice(mid+1)).split("");
  for(var i = mid; i > -1; i--) {
    var compareTo = arr[mid - 1 + (arr.length/2) - i];
    if(arr[i] !== compareTo) {
      return false;
    }
  }
  return true;
}
*/
