// Using the JavaScript language, have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. 
// This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. 
// The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no. 

function FibonacciChecker(num) {

  // fancy algorithm 
  //function isFib(n) {
    //var check1 = Math.sqrt(5*n*n + 4) % 1 === 0;
    //var check2 = Math.sqrt(5*n*n - 4) % 1 === 0;
    //return check1 || check2 ? true : false;
  //}
 
  // non-fancy algorithm 
  function isFib(n) {
    var n1 = 0;
    var n2 = 1;
    var temp;
    for(var i = 0; i < num; i++) {
      temp = n1;
      n1 = n2;
      n2 += temp;
      if (n2 === num) {
        return true;
      }
    }
    return false;
  }

  return isFib(num) ? "yes" : "no";
}

