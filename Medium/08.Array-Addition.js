// Using the JavaScript language, have the function ArrayAddition(arr) take the array of numbers stored in arr 
// and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. 
// For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. 
// The array will not be empty, will not contain all the same elements, and may contain negative numbers. 

//function ArrayAddition(arr) {
  //var sortedArr = arr.sort( function(a,b) { return a - b; });
  //var largestNum = arr.pop();
  //var result = false;

  //var findCombo = function(sum, i) {
    //var temp = [];
    //sum = sum || 0;
    //i = i || 0;
    //// base case 
    //if (sum === largestNum) {
      //result = true;
      //return;
    //}
    //for (; i < sortedArr.length; i++) {
      //sum += sortedArr[i];
      //findCombo(sum, i + 1);
      //sum -= arr[i];
    //}
  //};
  //findCombo();
  //return result;
//}

function ArrayAddition(arr) {
  var sorted = arr.sort(function(a,b) { return a - b; });
  var largest = arr.pop();
  var res = false;
  var sum = 0;

  function findCombo(a) {
    for (var i = 0; i < a.length; i++) {
      var num = a.splice(i,1);
      sum += +num;
      if (sum === largest) {
        res = true;
        break;
      }
      findCombo(a);
      a.splice(i, 0, num);
      sum -= +num;
    }
  }

  findCombo(arr);

  return res;
}

