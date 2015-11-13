// Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored in arr 
// and return 1 if the mode equals the mean, 0 if they don't equal each other 
// (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). 
// The array will not be empty, will only contain positive integers, and will not contain more than one mode. 
function MeanMode(arr) {

 function findMean(array) {
    var sum = arr.reduce(function(a,b){return a + b});
    return sum/arr.length;
  }

  function findMode(array) {
    var storage = {};
    var mean;
    for(var i = 0; i < array.length; i++){
      if(storage[array[i]]) {
        storage[array[i]] = storage[array[i]] + 1;
      } else {
        storage[array[i]] = 1;
      }

      if(i === 0) {
        mean = array[i]
      } else if(storage[array[i]] > storage[mean]) {
        mean = array[i];
      }

    }
    return mean;
  }

  return findMean(arr) === findMode(arr) ? 1 : 0;
}

