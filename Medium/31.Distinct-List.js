// Using the JavaScript language, have the function DistinctList(arr) take the array of numbers stored in arr and determine the total number of duplicate entries. 
// For example if the input is [1, 2, 2, 2, 3] then your program should output 2 because there are two duplicates of one of the elements. 

function DistinctList(arr) {
  var storage = {};
  var dups = 0;

  arr.forEach(function(num) {
    if (storage[num]) {
      dups++;
    } else {
      storage[num] = true;
    }
  });

  return dups;
}

