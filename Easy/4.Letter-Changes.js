function LetterChanges(str) {
  var result = [];
  var arr = str.split("");
  var vowelTest = /[aeiou]/;
  for(var i = 0; i < arr.length; i++) {
    var temp = arr[i];
    if(arr[i] === "z") {
      temp = "a";
    } else if(arr[i] === " "){
      temp = " ";
    } else if(arr[i].match(/[a-y]/i)){
      var tempCharCode = arr[i].charCodeAt(0);
      temp = String.fromCharCode(tempCharCode + 1);
   }
    if(vowelTest.test(temp)){
      temp = temp.toUpperCase();
    }
    result.push(temp);
  }
  return result.join("");
}

