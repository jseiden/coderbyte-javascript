// Using the JavaScript language, have the function StringReduction(str) take
// the str parameter being passed and return the smallest number you can get
// through the following reduction method. The method is:
// only the letters a, b, and c will be given in str and you must take two
// different adjacent characters and replace it with the third. For example "ac"
// can be replaced with "b" but "aa" cannot be replaced with anything.

// This method is done repeatedly until the string cannot be further reduced, and the length
// the length of the resulting string is to be outputted.
// For example: if can be reduced to "b" and you get "bb" (you can also reduce
// it to "cc"). The reduction is done so the output
// should be 2. If str is "bcab", "bc" reduces to "a", so you have "aab", then
// "ab" reduces to "c", and the final string "ac" is reduces to "b" so the
// output should be 1.

function StringReduction(str) {
  var strArr = str.split("");
  var temp = str;

  function passes(s) {
    console.log(s);
    if (scan(s) === temp) {
      console.log("same");
      console.log(scan(s));
      return scan(s); 
    } else {
        temp = scan(s);
        return passes(scan(s));
    }
  }
  return passes(str).length;
}

// perform one pass
function scan(str) {
  var res = [];
  var arr = str.split("");
  len = arr.length;
  var i = 0;
  while (i < len - 1) {
    
    var sample = arr.slice(i,i+2).join("");
    var test = abc(sample);
    if (test.length === 1) {
      arr.splice(i, 2, test.join(""));
      len = arr.length;
    } else if (test.length === 2) {
      len = arr.length;
      i++
    }
  }
  return arr.join("");
}

// process two letters (expects string)
function abc(s) {
  var sorted = s.split("").sort().join("");
  return (sorted === "ab" ? "c" : sorted === "ac" ? "b" : sorted === "bc" ? "a" : sorted).split(""); 
}


