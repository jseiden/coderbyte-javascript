// Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr 
// and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. 
// For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. 
// The array will not be empty, will not contain all the same elements, and may contain negative numbers. 

 //function ArrayAdditionI(arr) {
  //var sortedArr = arr.sort(function(a,b){ return a - b });
  //var largestNum = arr.pop();
  //var findCombo = function(target, array) {
    //if(array.length === 0) {
       ////returns false if array is empty and target is not 0. this means there
       ////was a remainder and that no numbers go in evenly 
      //return target === 0;
    //}
    //var n = array[0];
    //array = array.slice(1);
    
    //return findCombo(target, array) || findCombo(target - n, array);
  //}
  //return findCombo(largestNum, arr);
//}

function ArrayAdditionI(arr) {
  var sortedArr = arr.sort(function(a,b){return a - b});
  var largestNum = arr.pop();
  var result = false;

  var findCombo = function(sum, i) {
    var temp = [];
    sum = sum || 0;
    i = i || 0;
    if(sum === largestNum) {
      result = true;
      return;
    }
    for(; i < sortedArr.length; i++) {
      sum += sortedArr[i];
      findCombo(sum, i + 1);
      sum -= arr[i];
    }
  };
  findCombo();
  return result;
}

