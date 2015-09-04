// Using the JavaScript language, have the function SimpleMode(arr) take the array of numbers stored in arr 
// and return the number that appears most frequently (the mode). 
// For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. 
// If there is more than one mode return the one that appeared in the array first 
// (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty. 

function SimpleMode(arr) {
  var storage = {};
  storage[arr[0]] = 1;
  var mode = arr[0];
  for(var i = 1; i < arr.length; i++) {
    storage[arr[i]] = storage[arr[i]] ? storage[arr[i]] + 1 : 1;
    if(storage[arr[i]] > storage[mode]) {
      mode = arr[i]; 
    }
  }
  return storage[mode] < 2 ? -1 : mode;
}
console.log(SimpleMode([1, 6, 3, 4]));
