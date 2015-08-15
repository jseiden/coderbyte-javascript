//Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. 

function ABCheck(str) {
  var arr = str.split("");
  console.log(arr);
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === "a") {
      for(var j = 0 ; j < arr.length; j++) {
        console.log(arr[j]);
        console.log(j + "-" + i + ":" + Math.abs(j-i));
        if(arr[j] === "b" && Math.abs(j - i) === 4) {
          return "true";
        }
      }

    }
  }
  return false;

}

