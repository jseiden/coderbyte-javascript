// Using the JavaScript language, have the function MultipleBrackets(str) take the str parameter being passed 
// and return 1 #ofBrackets if the brackets are correctly matched and each one is accounted for. 
// Otherwise return 0. For example: if str is "(hello [world])(!)", then the output should be 1 3 
// because all the brackets are matched and there are 3 pairs of brackets, but if str is "((hello [world])" 
// then the output should be 0 because the brackets do not correctly match up. 
// Only "(", ")", "[", and "]" will be used as brackets. If str contains no brackets return 1. 

function MultipleBrackets(str) {
  var arr = str.split("");
  var flag = 1;
  var openParens = 0;
  var closeParens = 0;
  var openBrackets = 0;
  var closeBrackets = 0;

  function recurse(a)  {
    if (a.length === 0) {
      return;
    }
    var ch = a.splice(0,1)[0];
    switch (ch) {
      case "(":
        openParens++;
        break;
      case ")":
        closeParens++;
        break;
      case "[":
        openBrackets++;
        break;
      case "]":
        closeBrackets++;
        break;
    }

    if (closeParens > openParens || closeBrackets > openBrackets) {
      flag = 0;
    }

    recurse(a);
  }
  
  recurse(arr);

  if (openParens !== closeParens || openBrackets !== closeBrackets) {
    flag = 0;
  }

  return flag === 0 ? 0 : (openBrackets + openParens) === 0 ? 1 : 1 + " " + (openBrackets + openParens); 
}
