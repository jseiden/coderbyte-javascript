// Using the JavaScript language, have the function Consecutive(arr) take the array of integers stored in arr 
// and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number. 
// For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. 
// Negative numbers may be entered as parameters and no array will have less than 2 elements. 

function Consecutive(arr) {
  var total = 0;
  arr = arr.sort(function(a,b){return a - b})
  var range = arr[arr.length - 1] - arr[0] + 1;
  return range - arr.length;
}

//function Consecutive(arr) {
  //var totalCount = 0;
  //arr = arr.sort(function(a,b){return a - b});
  
  //function fillGap(num1, num2) {
    //var count = 0;
    //if(num2 - num1 > 0){
      //for(var i = num1 + 1; i < num2; i++)  {
        //count++;
      //}
    //}
    //totalCount += count;
  //}

  //for(var j = 0; j < arr.length - 1; j++){
    //fillGap(arr[j], arr[j+1]);
  //}

  //return totalCount;
//}

