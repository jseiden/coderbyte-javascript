// Using the JavaScript language, have the function PrimeChecker(num) take num 
// and return 1 if any arrangement of num comes out to be a prime number, otherwise return 0. 
// For example: if num is 910, the output should be 1 because 910 can be arranged into 109 or 019, both of which are primes. 

function PrimeChecker(num) {
  num = num.toString().split("");
  var usedChars = [];
  var results = [];
  var flag = false;

  function permute(input) {
    var i = 0;
    var test;
    while (i < input.length) {
      var ch = input.splice(i,1);
      usedChars.push(ch);
      if (input.length === 0) {
        test = +usedChars.join("");
        if (isPrime(test)) {
          flag = true;
          return;
        }
      }
      permute(input);
      input.splice(i,0,ch);
      usedChars.pop();
      i++;
    }
  }

  permute(num);
  return flag ? 1 : 0;

}

function isPrime(n) {
  var i = 2;
  for (; i < n; i++) {
    if (n !== 2 && n % i === 0) {
      return false;
    }
    return true;
  }
}
