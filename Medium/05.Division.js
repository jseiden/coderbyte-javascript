// Using the JavaScript language, have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. 
// That is, return the greatest number that evenly goes into both numbers with no remainder. 
// For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3. 

function Division(num1, num2) {
  var smaller = Math.min(num1, num2);
  var larger = Math.max(num1, num2);
  for(var i = smaller; i > 0; i--) {
    if(smaller % i === 0 && larger % i === 0) {
      return i;
    }
  }
}
