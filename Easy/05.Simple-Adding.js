// Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. 
// For the test cases, the parameter num will be any number from 1 to 1000.

//function SimpleAdding(num) {
  //var total = 0;
  //for(var i = 1; i <= num; i ++) {
    //var total = total + i;
  //}
  //return total;
//}
 
function SimpleAdding(num) {
  return num === 1 ? 1 : num + SimpleAdding(num - 1);
}

