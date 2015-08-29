// Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case of each character. 
// For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. 

function SwapCase(str) {
  var result = [];
  str.split("").forEach(function(el){
    if(el.match(/[a-z]/i)) {
      result.push(el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()); 
    } else {
      result.push(el);
    }
  })
  return result.join("");
}

