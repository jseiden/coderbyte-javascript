// Using the JavaScript language, have the function StringScramble(str1,str2) take both parameters being passed and return the string true 
// if a portion of str1 characters can be rearranged to match str2, otherwise return the string false. 
// For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters. 

function StringScramble(str1, str2) {
  var str2Arr = str2.split("");
  console.log(str2Arr);
  for(var i = 0; i < str2.length; i++) {
    if(str1.indexOf(str2Arr[i]) === -1) {
      return false;
    }
  }
  return true;
}
