// Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed 
// which will always be a positive integer and return its additive persistence 
// which is the number of times you must add the digits in num until you reach a single digit. 
// For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 

//function AdditivePersistence(num) {
  //var count = 0;

  //function addAll(n){
    //return n.toString().split("").reduce(function(a,b){return +a + +b});
  //}
  
  //while(num.toString().length > 1) {
    //count++;
    //num = addAll(num);
  //}

  //return count;

//}

function AdditivePersistence(num) {
  var count = 0;

  function addAll(n){
    if (n.toString().length === 1) {
      return;
    }
    count++;
    addAll(n.toString().split("").reduce(function(a,b){return +a + +b}));
  }
  addAll(num);

  return count;
}

