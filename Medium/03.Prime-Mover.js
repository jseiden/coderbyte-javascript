// Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. 
// The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 

function PrimeMover(num) {
  var count = 0;
  var i = 2;

  function isPrime(n) {
    for(var i = n - 1; i > 1; i--) {
      if(!(n % i)) {
        return false
      }
    }
    return true;
  }
  
  while(count < num) {
   if(isPrime(i)) {
     count++
   }
   i++;
  }
  return i - 1;
}

